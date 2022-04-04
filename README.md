# Music Search App
### This app is made with guidance from ThriveDX bootcamp to help learn react, and tools within react.

## Goals of this project:
- Better understanding of React
- Styling with styled components & bootstrap
- Better understanding of using hooks, context, and routers
- A space to write, then refactor code to better comprehend workflow

## Understanding useEffect
### Documentation from: https://reactjs.org/docs/hooks-effect.html
What does useEffect do? 

By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
### REMEMBER: 
Does useEffect run after every render?

Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.
### Example :
```
  //useEffect for grabbing API data
  useEffect(() => {
    const fetchData = async () => {
      document.title = `${search} Music`
      const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
      const resData = await response.json()
      //Checking to assure there are results 
      if(resData.results.length > 0){
        setData(resData.results)
      }else{
        setMessage('Not Found')
      }
    }
    fetchData()
    //Dependency array to run useEffect when search is updated
  }, [search])
```
Consider the above code. This useEffect would run infintely without the use of the dependency array [search]. The depedency array allows the useEffect only to run when the array is changed.


