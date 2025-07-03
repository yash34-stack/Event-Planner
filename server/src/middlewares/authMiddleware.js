export const sample =(req,res,next) =>{
    console.log("I am Middle ware named sample");
    console.log(req.url);
    console.log(req.method);
    next();
};
export const sample1 =(req,res,next) =>{
    console.log("I am Middle ware named sample1");
    console.log(req.url);
    console.log(req.method);
    next();
};
export const sample2 =(req,res,next) =>{
    console.log("I am Middle ware named sample2");
    console.log(req.url);
    console.log(req.method);
    next();
};

