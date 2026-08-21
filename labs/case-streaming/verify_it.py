events=[{'id':'a','key':'u1','event_time':3,'value':2},{'id':'b','key':'u1','event_time':12,'value':5},{'id':'c','key':'u2','event_time':8,'value':4},{'id':'a','key':'u1','event_time':3,'value':2},{'id':'d','key':'u1','event_time':7,'value':1}]
def process(rows,width=10,watermark=15,allowed_lateness=10):
    seen=set(); windows={}; duplicates=[]; too_late=[]
    for event in rows:
        if event['id'] in seen: duplicates.append(event['id']); continue
        seen.add(event['id'])
        if event['event_time']<watermark-allowed_lateness: too_late.append(event['id']); continue
        start=event['event_time']//width*width; out_key=(event['key'],start); windows[out_key]=windows.get(out_key,0)+event['value']
    return windows,duplicates,too_late
result,duplicates,too_late=process(events)

# ---- Use it ----
reordered=process(list(reversed(events)))[0]; replayed=process(events+events)[0]; output_rows=[{'key':k,'window_start':w,'value':v,'output_id':f'{k}:{w}:v1'} for (k,w),v in sorted(result.items())]

# ---- Verify it ----
assert result=={('u1',0):1,('u1',10):5,('u2',0):4}
assert duplicates==['a'] and too_late==['a']
assert reordered==result and replayed==result
assert len({row['output_id'] for row in output_rows})==len(output_rows)
assert sum(result.values())==10
# Moving the watermark changes the declared late-data result.
assert process(events,watermark=10)[0]!=result
