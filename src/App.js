import './App.css';
import Customer from './component/Customer';
// body 영역
//github token: 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
function App() {
  const customers=[{
    'id':1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '이승진',
    'birth': '760720',
    'gender': 'male',
    'job': 'salary man'
  },
  {
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '김수희',
    'birth': '800130',
    'gender': 'female',
    'job': 'housewife'
  },
  {
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '이정엽',
    'birth': '101017',
    'gender': 'male',
    'job': 'student'
  }]



  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birth={c.birth}
              gender={c.gender}
              job={c.job}></Customer>
          )
        })
      }
    </div>
  )

}

export default App;
