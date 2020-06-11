API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/sign-out"

curl "${API}/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

  echo
