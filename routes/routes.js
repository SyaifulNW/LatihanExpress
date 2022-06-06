// import express
import express from "express";
 
// init express router
const router = express.Router();
 
// Home route
router.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});
 
// About route
router.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});
 
// Contact route
router.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});
 
// export default router
export default router;