const MailTo = ({ email, subject, body, ...props }) => {
  return (
    <a className="mail-to" href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
};
export default MailTo;
