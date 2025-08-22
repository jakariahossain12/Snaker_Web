
export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-primary text-secondary font-bold p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
}
