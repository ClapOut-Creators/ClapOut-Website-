/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL of the ClapOut backend API, e.g. http://localhost:4000/api/v1 */
  readonly VITE_API_BASE_URL?: string;
  /** Origin of the ClapOut Studio platform, e.g. http://localhost:4200 */
  readonly VITE_PLATFORM_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
