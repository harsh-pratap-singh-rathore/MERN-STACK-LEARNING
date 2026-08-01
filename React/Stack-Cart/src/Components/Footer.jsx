function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#f4f4f4', borderTop: '1px solid #ccc', marginTop: '2rem', textAlign: 'center' }}>
      <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
