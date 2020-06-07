API="https://tic-tac-toe-wdi-production.herokuapp.com"

curl "${API}/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --headr "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
