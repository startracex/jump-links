export default function Icons(props: { type: string; }) {
  switch (props.type) {
    case "ok":
    case "success":
      return <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
          fill="#23b65a" stroke="#23b65a" stroke-width="3" stroke-linejoin="round" />
        <path d="M16 24L22 30L34 18" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>;
    case "error":
      return <svg viewBox="0 0 48 48" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 5L2 43H46L24 5Z" fill="#d0021b" stroke="#d0021b" stroke-width="3"
          stroke-linejoin="round" />
        <path d="M24 35V36" stroke="#FFF" stroke-width="3" stroke-linecap="round" />
        <path d="M24 19.0005L24.0083 29" stroke="#FFF" stroke-width="3" stroke-linecap="round" />
      </svg>
    case "info":
      return <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
          fill="#9b9b9b" stroke="#9b9b9b" stroke-width="3" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z"
          fill="#FFF" />
        <path d="M24.5 34V20H23.5H22.5" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 34H28" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>;
    default:
      return <svg viewBox="0 0 48 48" fill="none">
        <path d="M28 6H42V20" stroke="#2c81ec" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"
          stroke="#2c81ec" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M25.7998 22.1999L41.0998 6.8999" stroke="#2c81ec" stroke-width="3" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>;
  }
}