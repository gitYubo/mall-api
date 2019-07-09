    
import admin from './admin'
import member from './member'
import system from './system'
import goods from './goods'
import tag from './tag'

import upload from './upload'

export default app =>{
    app.use('/admin', admin)
    app.use('/system', system)
    app.use('/member', member)
    app.use('/goods', goods)
    app.use('/tag', tag)

    app.use('/upload', upload)
}