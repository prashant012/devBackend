const adminAuth = (req, res, next) => {
    const authUser = 'xyz';
    const isAdminAuthorised = authUser === 'xyz';
        if(!isAdminAuthorised) {
            res.status(401).send('admin is not authrised');
        } else {
            console.log('here we have authenticated')
            next()
        }    
}

const userAuth = (req, res, next) => {
    const authUser = 'xyz';
    const isAdminAuthorised = authUser === 'xyz';
        if(!isAdminAuthorised) {
            res.status(401).send('user is not authrised');
        } else {
            console.log('user is authenticated')
            next()
        }    
}

module.exports = {
    adminAuth,
    userAuth,
}