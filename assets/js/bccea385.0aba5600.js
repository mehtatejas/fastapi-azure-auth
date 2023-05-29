"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>_});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,_=u["".concat(c,".").concat(d)]||u[d]||f[d]||r;return n?a.createElement(_,o(o({ref:t},p),{},{components:n})):a.createElement(_,o({ref:t},p))}));function _(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const r={title:"Accept specific tenants only",sidebar_position:3},o=void 0,s={unversionedId:"multi-tenant/accept_specific_tenants_only",id:"multi-tenant/accept_specific_tenants_only",title:"Accept specific tenants only",description:"If your multi-tenant application only should accept a few tenants, you'll have to verify issuers, or the iss field in the JWT.",source:"@site/docs/multi-tenant/accept_specific_tenants_only.mdx",sourceDirName:"multi-tenant",slug:"/multi-tenant/accept_specific_tenants_only",permalink:"/fastapi-azure-auth/multi-tenant/accept_specific_tenants_only",editUrl:"https://github.com/Intility/FastAPI-Azure-Auth/edit/main/docs/docs/multi-tenant/accept_specific_tenants_only.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Accept specific tenants only",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"FastAPI configuration",permalink:"/fastapi-azure-auth/multi-tenant/fastapi_configuration"},next:{title:"Accessing the user object",permalink:"/fastapi-azure-auth/usage-and-faq/accessing_the_user"}},c={},l=[{value:"More sophisticated callable",id:"more-sophisticated-callable",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If your multi-tenant application only should accept a few tenants, you'll have to verify ",(0,i.kt)("inlineCode",{parentName:"p"},"issuers"),", or the ",(0,i.kt)("inlineCode",{parentName:"p"},"iss")," field in the JWT."),(0,i.kt)("p",null,"We'll take the last code snippet from ",(0,i.kt)("a",{parentName:"p",href:"fastapi_configuration"},"FastAPI configuration")," and change a few lines of code to make\nthis happen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:"{8,42-49,56-57}","{8,42-49,56-57}":!0},"from typing import Union\n\nimport uvicorn\nfrom fastapi import FastAPI, Security\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import AnyHttpUrl, BaseSettings, Field\nfrom fastapi_azure_auth import MultiTenantAzureAuthorizationCodeBearer\nfrom fastapi_azure_auth.exceptions import InvalidAuth\n\n\nclass Settings(BaseSettings):\n    BACKEND_CORS_ORIGINS: list[Union[str, AnyHttpUrl]] = ['http://localhost:8000']\n    OPENAPI_CLIENT_ID: str = Field(default='', env='OPENAPI_CLIENT_ID')\n    APP_CLIENT_ID: str = Field(default='', env='APP_CLIENT_ID')\n\n    class Config:\n        env_file = '.env'\n        env_file_encoding = 'utf-8'\n        case_sensitive = True\n\nsettings = Settings()\n\napp = FastAPI(\n    swagger_ui_oauth2_redirect_url='/oauth2-redirect',\n    swagger_ui_init_oauth={\n        'usePkceWithAuthorizationCodeGrant': True,\n        'clientId': settings.OPENAPI_CLIENT_ID,\n    },\n)\n\nif settings.BACKEND_CORS_ORIGINS:\n    app.add_middleware(\n        CORSMiddleware,\n        allow_origins=[str(origin) for origin in settings.BACKEND_CORS_ORIGINS],\n        allow_credentials=True,\n        allow_methods=['*'],\n        allow_headers=['*'],\n    )\n\n\nasync def check_if_valid_tenant(tid: str) -> str:\n    tid_to_iss_mapping = {\n        '9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6': 'https://login.microsoftonline.com/9b5ff18e-53c0-45a2-8bc2-9c0c8f60b2c6/v2.0'\n    }\n    try:\n        return tid_to_iss_mapping[tid]\n    except KeyError:\n        raise InvalidAuth('Tenant not allowed')\n\nazure_scheme = MultiTenantAzureAuthorizationCodeBearer(\n    app_client_id=settings.APP_CLIENT_ID,\n    scopes={\n        f'api://{settings.APP_CLIENT_ID}/user_impersonation': 'user_impersonation',\n    },\n    validate_iss=True,\n    iss_callable=check_if_valid_tenant\n)\n\n\n@app.on_event('startup')\nasync def load_config() -> None:\n    \"\"\"\n    Load OpenID config on startup.\n    \"\"\"\n    await azure_scheme.openid_config.load_config()\n\n\n@app.get(\"/\", dependencies=[Security(azure_scheme)])\nasync def root():\n    return {\"message\": \"Hello World\"}\n\n\nif __name__ == '__main__':\n    uvicorn.run('main:app', host='localhost', port=8000, reload=True)\n")),(0,i.kt)("p",null,"We're first creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"async function"),", which takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"tid")," as an argument, and returns the tenant ID's ",(0,i.kt)("inlineCode",{parentName:"p"},"iss")," if it's a valid tenant.\nIf it's not a valid tenant, it has to raise an ",(0,i.kt)("inlineCode",{parentName:"p"},"InvalidAuth()")," exception."),(0,i.kt)("h2",{id:"more-sophisticated-callable"},"More sophisticated callable"),(0,i.kt)("p",null,"If you want to cache these results in memory, you can do so by creating a more sophisticated callable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class IssuerFetcher:\n    def __init__(self) -> None:\n        """\n        Example class for multi tenant apps, that caches issuers for an hour\n        """\n        self.tid_to_iss: dict[str, str] = {}\n        self._config_timestamp: Optional[datetime] = None\n\n    async def __call__(self, tid: str) -> str:\n        """\n        Check if memory cache needs to be updated or not, and then returns an issuer for a given tenant\n        :raises InvalidAuth when it\'s not a valid tenant\n        """\n        refresh_time = datetime.now() - timedelta(hours=1)\n        if not self._config_timestamp or self._config_timestamp < refresh_time:\n            self._config_timestamp = datetime.now()\n            # logic to find your allowed tenants and it\'s issuers here\n            # (This example cache in memory for 1 hour)\n            self.tid_to_iss = {\n                \'intility_tenant\': \'intility_tenant\',\n            }\n        try:\n            return self.tid_to_iss[tid]\n        except Exception as error:\n            log.exception(\'`iss` not found for `tid` %s. Error %s\', tid, error)\n            raise InvalidAuth(\'You must be an Intility customer to access this resource\')\n\n\nissuer_fetcher = IssuerFetcher()\n\nazure_scheme = MultiTenantAzureAuthorizationCodeBearer(\n    ...\n    validate_iss=True,\n    iss_callable=issuer_fetcher\n)\n')))}f.isMDXComponent=!0}}]);