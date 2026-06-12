function LinkNav({ href, secao, onClick }) {
  return (
    <li>
      <a href={href} onClick={onClick}>
        {secao}
      </a>
    </li>
  );
}

export default LinkNav; 