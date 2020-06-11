API="https://tic-tac-toe-wdi-production.herokuapp.com"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
