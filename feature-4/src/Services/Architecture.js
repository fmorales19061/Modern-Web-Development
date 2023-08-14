import Parse from "parse";

const getAllarchs = async () => {
    const Architecture = Parse.Object.extend('Architecture');
    const query = new Parse.Query(Architecture);
    // You can also query by using a parameter of an object
    // query.equalTo('objectId', 'xKue915KBG');
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const Name = object.get('Name')
        const Release_Date = object.get('Release_Date')
        console.log(Name);
        console.log(Release_Date);
      }
    } catch (error) {
      console.error('Error while fetching Architecture', error);
    }
  }
  export default getAllarchs;




