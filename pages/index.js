const Home = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/forms'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const res = await fetch(endpoint, options)
    if(res.status === 200){
      // Add action for successful form submission or remove
      console.log('Browser: Form Submitted')
    }
    else {
      // Add action for form submission error or remove
      console.log('Browser: Error with form submission')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="email">Message:</label>
        <textarea name="message" id="message"/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}



export default Home