from app import db



class Task(db.Model):
    __tablename__ = 't_task'
    id = db.Column(db.Integer, primary_key=True)
    task_type = db.Column(db.Integer, unique=False)
    create_dt = db.Column(db.Integer, unique=False)
    update_dt = db.Column(db.Integer, unique=False)
    status = db.Column(db.String(20), unique=False)
    req_num = db.Column(db.Integer, unique=False)
    fail_num = db.Column(db.Integer, unique=False)
    succ_num = db.Column(db.Integer, unique=False)

    @property
    def to_json(self):
        return {
            'id': self.id,
            'task_type': self.task_type,
            'create_dt': self.create_dt,
            'update_dt': self.update_dt,
            'status': self.status,
            'req_num': self.req_num,
            'fail_num': self.fail_num,
            'succ_num': self.succ_num
        }

    @property
    def save(self):
        if not self.id:
            db.session.add(self)
            db.session.commit()
            return 'create'
        else:
            db.session.commit()
            return 'update'



class TaskLine(db.Model):
    __tablename__ = 't_taskline'
    id = db.Column(db.Integer, primary_key=True)
    task_id = db.Column(db.String(100), unique=False)
    pid = db.Column(db.Integer, unique=False)
    task_desc1 = db.Column(db.String(100),unique=False)
    task_desc2 = db.Column(db.String(100),unique=False)
    task_type = db.Column(db.Integer, unique=False)
    create_dt = db.Column(db.Integer, unique=False)
    update_dt = db.Column(db.Integer, unique=False)
    status = db.Column(db.String(20), unique=False)
    req_num = db.Column(db.Integer, unique=False)

    @property
    def to_json(self):
        return {
            'id': self.id,
            'task_id': self.task_id,
            'pid': self.pid,
            'task_desc1': self.task_desc1,
            'task_desc2': self.task_desc2,
            'task_type': self.task_type,
            'create_dt': self.create_dt,
            'update_dt': self.update_dt,
            'status': self.status,
            'req_num': self.req_num
        }

    @property
    def save(self):
        if not self.id:
            db.session.add(self)
            db.session.commit()
            return 'create'
        else:
            db.session.commit()
            return 'update'
