import requests

API_URL = "https://api-inference.huggingface.co/models/hilmantm/detr-traffic-accident-detection"
headers = {"Authorization": "Bearer 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"}

def query(filename):
    with open(filename, "rb") as f:
        data = f.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

output = query("output.jpg")