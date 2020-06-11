API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/sign-up"

curl "${API}/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

  echo
