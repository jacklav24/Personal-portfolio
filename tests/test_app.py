from portfolio import create_app


def test_home_and_assets():
    client = create_app().test_client()
    response = client.get('/')
    assert response.status_code == 200
    assert b'Jack LaVergne' in response.data
    for asset in ['style.css', 'app.js', 'favicon.svg']:
        assert client.get(f'/static/{asset}').status_code == 200
    for anchor in ['work', 'experience', 'about', 'contact']:
        assert f'id="{anchor}"'.encode() in response.data
    assert "script-src 'self'" in response.headers['Content-Security-Policy']


def test_health_and_missing_page():
    client = create_app().test_client()
    assert client.get('/health').json == {'status': 'ok'}
    assert client.get('/missing').status_code == 404
    assert client.get('/static/../__init__.py').status_code == 404
