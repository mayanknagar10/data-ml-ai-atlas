def closure(attributes,dependencies):
    result=set(attributes)
    changed=True
    while changed:
        changed=False
        for left,right in dependencies:
            if set(left)<=result and not set(right)<=result:
                result.update(right); changed=True
    return result
