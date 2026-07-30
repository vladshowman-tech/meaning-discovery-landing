import json
import os
import re
from datetime import datetime
from typing import Dict, Any

import psycopg2


def handler(event: Dict[str, Any], context) -> Dict[str, Any]:
    '''Принимает согласие пользователя на обработку персональных данных (POST)
    и возвращает список собранных данных (GET) для служебной страницы.
    Args: event с httpMethod, body/queryStringParameters; context с request_id
    Returns: HTTP response dict
    '''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    dsn = os.environ['DATABASE_URL']
    conn = psycopg2.connect(dsn)

    try:
        if method == 'POST':
            body = json.loads(event.get('body') or '{}')
            email = (body.get('email') or '').strip()
            full_name = (body.get('fullName') or '').strip()
            city = (body.get('city') or '').strip()
            phone = (body.get('phone') or '').strip()

            if not email or not full_name or not city or not phone:
                return {
                    'statusCode': 400,
                    'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                    'body': json.dumps({'error': 'Заполните все поля'})
                }

            if not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', email):
                return {
                    'statusCode': 400,
                    'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                    'body': json.dumps({'error': 'Некорректный e-mail'})
                }

            email_esc = email.replace("'", "''")
            full_name_esc = full_name.replace("'", "''")
            city_esc = city.replace("'", "''")
            phone_esc = phone.replace("'", "''")

            cur = conn.cursor()
            cur.execute(
                f"INSERT INTO privacy_consents (email, full_name, city, phone) "
                f"VALUES ('{email_esc}', '{full_name_esc}', '{city_esc}', '{phone_esc}')"
            )
            conn.commit()
            cur.close()

            return {
                'statusCode': 200,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'success': True})
            }

        if method == 'GET':
            cur = conn.cursor()
            cur.execute(
                "SELECT id, email, full_name, city, phone, created_at FROM privacy_consents ORDER BY created_at DESC"
            )
            rows = cur.fetchall()
            cur.close()

            data = [
                {
                    'id': r[0],
                    'email': r[1],
                    'fullName': r[2],
                    'city': r[3],
                    'phone': r[4],
                    'createdAt': r[5].isoformat() if isinstance(r[5], datetime) else str(r[5])
                }
                for r in rows
            ]

            return {
                'statusCode': 200,
                'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
                'body': json.dumps({'items': data})
            }

        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    finally:
        conn.close()
