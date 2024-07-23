/// <reference path="../.astro/types.d.ts" />
/// <reference path="./types/netlify-identity-widget.d.ts" />
/// <reference types="astro/client" />

interface Window {
    CMS_MANUAL_INIT: boolean;
    netlifyIdentity: NetlifyIdentity;
}