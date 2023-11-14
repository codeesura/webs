import requests
import json
import time

# Define the API URL and the collection address.
url = "https://api.pyramid.market/api/collection/getHolders"
collection_address = "0x2d679a171589777bc996fb27767ff9a2e44c7e07967760dea3df31704ab398a"

# Function to make a POST request to the API.
def fetch_data(skip):
    payload = {
        'collection': collection_address,
        'skip': skip
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.post(url, headers=headers, data=payload)
    if response.status_code == 200:
        return response.json()['data']
    else:
        print(f"Error fetching data: {response.status_code}")
        return None

# Function to save data to a JSON file.
def save_data(data, filepath):
    # Sort the data by tokenId before saving.
    sorted_data = sorted(data, key=lambda x: int(x['nft']['metadata']['tokenId']))
    with open(filepath, 'w') as file:
        json.dump(sorted_data, file, indent=4)

# Filepath for the JSON file.
filepath = 'sorted_unique_nft_holders.json'

# Initialize a dictionary to hold all the holder data with tokenId as the key.
all_holders = {}

# Counter for the number of requests made.
request_count = 0

# Loop through the number of skips required to get all holders.
for skip in range(0, 400):
    holders = fetch_data(skip)
    request_count += 1

    # Add new holders to the all_holders dictionary if they are unique.
    if holders:
        for holder in holders:
            tokenId = holder['nft']['metadata']['tokenId']
            if tokenId not in all_holders:
                all_holders[tokenId] = holder
        # Save the current state of all_holders to the JSON file, sorted by tokenId.
        save_data(list(all_holders.values()), filepath)

    # Check if we've reached the rate limit.
    if request_count % 10 == 0:
        print("Rate limit reached. Waiting for 60 seconds.")
        time.sleep(60)  # Wait for 60 seconds before making new requests.

print("Data fetching complete. Final data saved to sorted_unique_nft_holders.json.")
