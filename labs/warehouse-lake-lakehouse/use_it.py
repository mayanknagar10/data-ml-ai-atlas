import json

class Table:
    def __init__(self):
        self.files={}; self.snapshots={0:[]}; self.current=0
    def stage(self,name,rows):
        self.files[name]=list(rows)
    def commit_append(self,base,new_files):
        if base!=self.current: raise RuntimeError('conflict')
        next_id=self.current+1
        self.snapshots[next_id]=self.snapshots[base]+list(new_files)
        self.current=next_id
        return next_id
    def read(self,snapshot=None):
        sid=self.current if snapshot is None else snapshot
        return [row for name in self.snapshots[sid] for row in self.files[name]]
    def rollback(self,snapshot):
        if snapshot not in self.snapshots: raise KeyError(snapshot)
        self.current=snapshot

# ---- Use it ----
table=Table()
table.stage('part-1',[{'id':1},{'id':2}])
s1=table.commit_append(0,['part-1'])
table.stage('part-2',[{'id':3}])
listed_before_commit=sorted(table.files)
s2=table.commit_append(s1,['part-2'])
manifest=json.dumps({'snapshot':s2,'files':table.snapshots[s2]},sort_keys=True)
