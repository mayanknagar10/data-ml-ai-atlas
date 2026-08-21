REQUIRED=['claim','population','baseline','estimate','interval','denominator','limitations','action','source','data_cutoff']
def validate_story(story):
    errors=[field for field in REQUIRED if not story.get(field)]
    lo,hi=story.get('interval',(None,None))
    if lo is not None and not lo<=story['estimate']<=hi: errors.append('estimate outside interval')
    if story.get('causal') and story.get('design')!='randomized': errors.append('unsupported causal wording')
    return errors

story={'claim':'Delivered-email CTR rose 0.06 percentage points','population':'delivered emails','baseline':'prior campaign','estimate':0.0006,'interval':(-0.0001,0.0013),'denominator':'all delivered emails','limitations':'subject line and audience composition changed','action':'run randomized factorial test','source':'campaign_metrics_v3','data_cutoff':'2026-08-20','causal':False}

# ---- Use it ----
import pandas as pd
record=pd.Series(story)
summary=f"{record['claim']} (interval {record['interval']}); action: {record['action']}"

# ---- Verify it ----
assert validate_story(story)==[]
bad=dict(story); bad['denominator']=''; assert 'denominator' in validate_story(bad)
causal=dict(story); causal['causal']=True; causal['design']='observational'; assert 'unsupported causal wording' in validate_story(causal)
assert story['interval'][0] <= story['estimate'] <= story['interval'][1]
assert 'action:' in summary
