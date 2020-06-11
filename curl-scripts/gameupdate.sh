API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

  echo
