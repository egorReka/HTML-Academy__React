/* eslint-disable react/prop-types */
function Comments({ comments }) {
  return (
    <div>
      <h2>Коментарии</h2>
      <ul>
        {comments.map((coment) => (
          <li key={coment.id}>
            <b>{coment.author}</b>
            <p>{coment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Comments;