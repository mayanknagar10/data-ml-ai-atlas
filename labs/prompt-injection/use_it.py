ALLOWED={'lookup_order'}
def authorize(call,user):
    if call['name'] not in ALLOWED: raise PermissionError('tool not allowed')
    if call.get('args',{}).get('user_id') != user: raise PermissionError('cross-user access')
    return True
malicious={'name':'send_secrets','args':{'user_id':'alice'}}

# ---- Use it ----
# The model may propose any text/tool call; the executor enforces policy.
try: authorize(malicious,'alice')
except PermissionError as e: print('blocked:',e)
