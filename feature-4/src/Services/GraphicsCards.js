import Parse from "parse";

const getAllgpus = async () => {
    const gpu = Parse.Object.extend('GPU');
    const query = new Parse.Query(gpu);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    query.include("architecture");
    try {
      const results = await query.find();
      return results;
    } catch (error) {
      console.error('Error while fetching gpu', error);
    }
    
  }
  export default getAllgpus;




