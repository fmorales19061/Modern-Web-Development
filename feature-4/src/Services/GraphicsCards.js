import Parse from "parse";

const getAllgpus = async () => {
    const gpu = Parse.Object.extend('GPU');
    const query = new Parse.Query(gpu);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const Name = object.get('Name')
        console.log(Name);
      }
      return results;
    } catch (error) {
      console.error('Error while fetching gpu', error);
    }
    
  }
  export default getAllgpus;




