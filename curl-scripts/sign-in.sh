API="https://tic-tac-toe-wdi-production.herokuapp.com"

curl "${API}/sign-in" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
