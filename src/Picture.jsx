/* eslint-disable react/prop-types */
function Picture({ src, alt }) {
  return (
    <div>
      <img width="200" height="257" src={src} alt={alt} />
    </div>
  )
}

export default Picture;