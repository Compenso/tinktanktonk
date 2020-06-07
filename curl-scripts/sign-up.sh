API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/sign-up"

curl "${API}/sign-up" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "passowrd": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

  echo
