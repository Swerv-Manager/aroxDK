#!/bin/bash
# usage: gift-curl.sh <label> <codes> <json items>  → fresh cart (own cookie jar), add items, apply codes, print summary
J=$(mktemp -p /tmp/claude-0/1b96edaf-0598-5e2c-a1e5-0ec006597c70/scratchpad ck.XXXX)
B=https://aroxfitness.dk
curl -sS -c $J -b $J -o /dev/null --max-time 20 "$B/cart.js"
curl -sS -c $J -b $J -o /dev/null --max-time 20 -X POST -H 'Content-Type: application/json' -d "{\"items\":$3}" "$B/cart/add.js"
curl -sS -c $J -b $J -o /dev/null --max-time 20 -X POST -H 'Content-Type: application/json' -d "{\"discount\":\"$2\"}" "$B/cart/update.js"
curl -sS -c $J -b $J --max-time 20 "$B/cart.js" | python3 -I -c "
import sys,json
c=json.load(sys.stdin)
print('$1:', 'total', c['total_price']/100, '| codes', ','.join(d['code']+('✓' if d['applicable'] else '✗') for d in c.get('discount_codes',[])), '|', ' / '.join(i['title'][:18]+' '+str(i['final_line_price']/100) for i in c['items']))"
rm -f $J
