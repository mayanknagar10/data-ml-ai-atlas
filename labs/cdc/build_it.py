events=[(1,"a",10),(2,"b",20),(2,"b",20),(4,"a",11),(3,"c",5)]
seen=set(); dedup=[]
for event in events:
    event_id=event[0]
    if event_id not in seen:
        seen.add(event_id); dedup.append(event)
watermark=3
on_time=[e for e in dedup if e[0]<=watermark]
late=[e for e in dedup if e[0]>watermark]
