arrival_rps=120; service_rps_per_worker=35; workers=4
capacity=service_rps_per_worker*workers
headroom=(capacity-arrival_rps)/capacity
components={"ingest":.999,"store":.9995,"serve":.998}
end_to_end=1.0
for a in components.values(): end_to_end*=a

# ---- Use it ----
slo={"capacity_ok":capacity>=arrival_rps,"headroom":headroom,"availability":end_to_end}

# ---- Verify it ----
assert slo["capacity_ok"]
assert 0<headroom<1
assert end_to_end<min(components.values())
assert end_to_end>0.99
