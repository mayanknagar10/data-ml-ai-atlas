registry={}
def register(version,uri,metric):
    registry[version]={'uri':uri,'metric':metric}
register('v1','models/v1.pt',.82); register('v2','models/v2.pt',.86)
production='v1'
