--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: AwardType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."AwardType" AS ENUM (
    'NORMAL',
    'SPECIAL'
);


ALTER TYPE public."AwardType" OWNER TO postgres;

--
-- Name: UserType; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."UserType" AS ENUM (
    'STUDENT',
    'COMPANY',
    'STAFF'
);


ALTER TYPE public."UserType" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Account" (
    id text NOT NULL,
    "userId" text NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    "providerAccountId" text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at integer,
    token_type text,
    scope text,
    id_token text,
    session_state text
);


ALTER TABLE public."Account" OWNER TO postgres;

--
-- Name: AwardToken; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."AwardToken" (
    id text NOT NULL,
    "studentId" integer NOT NULL,
    type public."AwardType" NOT NULL
);


ALTER TABLE public."AwardToken" OWNER TO postgres;

--
-- Name: CV; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CV" (
    id integer NOT NULL,
    "cvLocation" character varying(128) NOT NULL,
    "studentId" integer NOT NULL
);


ALTER TABLE public."CV" OWNER TO postgres;

--
-- Name: CV_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CV_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CV_id_seq" OWNER TO postgres;

--
-- Name: CV_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CV_id_seq" OWNED BY public."CV".id;


--
-- Name: CompanyCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CompanyCategory" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."CompanyCategory" OWNER TO postgres;

--
-- Name: CompanyCategory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CompanyCategory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CompanyCategory_id_seq" OWNER TO postgres;

--
-- Name: CompanyCategory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CompanyCategory_id_seq" OWNED BY public."CompanyCategory".id;


--
-- Name: CompanyCode; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CompanyCode" (
    id text NOT NULL,
    "companyId" integer NOT NULL,
    permanent boolean DEFAULT false NOT NULL,
    "socketId" text DEFAULT ''::text NOT NULL
);


ALTER TABLE public."CompanyCode" OWNER TO postgres;

--
-- Name: CompanyDetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CompanyDetails" (
    id integer NOT NULL,
    "categoryId" integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "userId" text NOT NULL
);


ALTER TABLE public."CompanyDetails" OWNER TO postgres;

--
-- Name: CompanyDetails_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."CompanyDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."CompanyDetails_id_seq" OWNER TO postgres;

--
-- Name: CompanyDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."CompanyDetails_id_seq" OWNED BY public."CompanyDetails".id;


--
-- Name: Session; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Session" (
    id text NOT NULL,
    "sessionToken" text NOT NULL,
    "userId" text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Session" OWNER TO postgres;

--
-- Name: Speaker; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Speaker" (
    id integer NOT NULL,
    title character varying(60) NOT NULL,
    name character varying(60) NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    description character varying(128) NOT NULL
);


ALTER TABLE public."Speaker" OWNER TO postgres;

--
-- Name: Speaker_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Speaker_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Speaker_id_seq" OWNER TO postgres;

--
-- Name: Speaker_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Speaker_id_seq" OWNED BY public."Speaker".id;


--
-- Name: StudentDetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."StudentDetails" (
    id integer NOT NULL,
    age integer NOT NULL,
    scans integer DEFAULT 0 NOT NULL,
    points integer DEFAULT 0 NOT NULL,
    course character varying(128) NOT NULL,
    university character varying(128) NOT NULL,
    companies_ids text[],
    "userId" text NOT NULL,
    reedems integer DEFAULT 0 NOT NULL
);


ALTER TABLE public."StudentDetails" OWNER TO postgres;

--
-- Name: StudentDetails_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."StudentDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."StudentDetails_id_seq" OWNER TO postgres;

--
-- Name: StudentDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."StudentDetails_id_seq" OWNED BY public."StudentDetails".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    "emailVerified" timestamp(3) without time zone,
    image text,
    role public."UserType" DEFAULT 'STUDENT'::public."UserType" NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: VerificationToken; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."VerificationToken" (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."VerificationToken" OWNER TO postgres;

--
-- Name: Workshop; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Workshop" (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    description character varying(128) NOT NULL,
    "companyId" integer NOT NULL
);


ALTER TABLE public."Workshop" OWNER TO postgres;

--
-- Name: Workshop_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Workshop_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Workshop_id_seq" OWNER TO postgres;

--
-- Name: Workshop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Workshop_id_seq" OWNED BY public."Workshop".id;


--
-- Name: _CompanyDetailsToStudentDetails; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."_CompanyDetailsToStudentDetails" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_CompanyDetailsToStudentDetails" OWNER TO postgres;

--
-- Name: CV id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CV" ALTER COLUMN id SET DEFAULT nextval('public."CV_id_seq"'::regclass);


--
-- Name: CompanyCategory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyCategory" ALTER COLUMN id SET DEFAULT nextval('public."CompanyCategory_id_seq"'::regclass);


--
-- Name: CompanyDetails id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyDetails" ALTER COLUMN id SET DEFAULT nextval('public."CompanyDetails_id_seq"'::regclass);


--
-- Name: Speaker id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Speaker" ALTER COLUMN id SET DEFAULT nextval('public."Speaker_id_seq"'::regclass);


--
-- Name: StudentDetails id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."StudentDetails" ALTER COLUMN id SET DEFAULT nextval('public."StudentDetails_id_seq"'::regclass);


--
-- Name: Workshop id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Workshop" ALTER COLUMN id SET DEFAULT nextval('public."Workshop_id_seq"'::regclass);


--
-- Data for Name: Account; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Account" (id, "userId", type, provider, "providerAccountId", refresh_token, access_token, expires_at, token_type, scope, id_token, session_state) FROM stdin;
cleo9znnx0000qxyj0xw8so44	32dd624d-a182-4eaa-84da-ebec8c74f38f	credentials	credentials	32dd624d-a182-4eaa-84da-ebec8c74f38f	\N	\N	\N	\N	\N	\N	\N
cleog9s560006qxyj4tdlp14c	5362bb0d-67a8-4347-abb5-80a3ef435724	oauth	fenix	ist197433	MTEzMjk3MzcxODIxNDc4MDo3YzVhMjBkMWY2MDU4ZjE0YjU1ZWE0MTI0NjliZWYyMDY5NjBhZTEyNWY4Mzg0MDZhMzdhNWQzOTA0ZDk1N2UzZmE1NzdjNjE4NWRmYjIzNjFiMTBmM2YxY2RmZDY5M2JmNGFhYTk5NzVhZGEwODE1NmY2NmEyMGJkOGMzMzA5Mw	MTEzMjk3MzcxODIxNDc4MDo0MzdkMmM4ZjI4NWM3NDhmZWE3NWM0MDlmMDE1OWRiY2FmZTYwZjQ2NDY4ZGVhMWRlYTI2OGY0YjY3ZGM2YzkwNjIyNjczMDQxNGE2YzljNGFjMjcyYWUxZjJmOTJjNjc4NTAwZjNlMTJlOThmNDdkMmVjNWI0NjQyOGNjOTZjMQ	\N	\N	\N	\N	\N
clepp3m210000qxqzbbzn3cqr	afe45ddc-b884-4f09-b9a4-f3b55c87848c	credentials	credentials	afe45ddc-b884-4f09-b9a4-f3b55c87848c	\N	\N	\N	\N	\N	\N	\N
clezydu7u00011vv3pd6q6qrq	43f04094-2a68-457d-b4fa-7993cbda48cb	credentials	credentials	43f04094-2a68-457d-b4fa-7993cbda48cb	\N	\N	\N	\N	\N	\N	\N
clezyfic800051vv3ecwned0r	7ad71efa-1799-417a-a32c-5bc3c56f47cc	credentials	credentials	7ad71efa-1799-417a-a32c-5bc3c56f47cc	\N	\N	\N	\N	\N	\N	\N
clezyj4dn00091vv3clkbveb6	7026cec1-97cd-48ff-9167-d69ec8b631d4	credentials	credentials	7026cec1-97cd-48ff-9167-d69ec8b631d4	\N	\N	\N	\N	\N	\N	\N
clezykue2000d1vv3rhioj9u0	9d35cb05-040f-407a-a0b4-167f41df97a8	credentials	credentials	9d35cb05-040f-407a-a0b4-167f41df97a8	\N	\N	\N	\N	\N	\N	\N
clezyqu0t000h1vv3xdq8akku	66815ed7-1b95-493b-8b7c-89187bb58eaa	credentials	credentials	66815ed7-1b95-493b-8b7c-89187bb58eaa	\N	\N	\N	\N	\N	\N	\N
clezyroe0000l1vv3uienf5pm	48428234-9d46-4e45-9e0e-20d9ccba5594	credentials	credentials	48428234-9d46-4e45-9e0e-20d9ccba5594	\N	\N	\N	\N	\N	\N	\N
clezysxke000p1vv3b73wvidw	06f3049f-a9a0-4442-837d-bda3cc4ac3da	credentials	credentials	06f3049f-a9a0-4442-837d-bda3cc4ac3da	\N	\N	\N	\N	\N	\N	\N
clezyu9ox000t1vv3mfosce8r	319ceae7-ea49-4a35-aa25-763f3b6c9bb0	credentials	credentials	319ceae7-ea49-4a35-aa25-763f3b6c9bb0	\N	\N	\N	\N	\N	\N	\N
clezyvbqj000x1vv3wjy8tsdp	45635aa1-005d-44a3-a0a9-d3e3e52bc38b	credentials	credentials	45635aa1-005d-44a3-a0a9-d3e3e52bc38b	\N	\N	\N	\N	\N	\N	\N
clezywd3r00111vv311scqjxz	e90213c1-f26a-49c8-a2c4-5b4ca5b35841	credentials	credentials	e90213c1-f26a-49c8-a2c4-5b4ca5b35841	\N	\N	\N	\N	\N	\N	\N
clezyxbrj00151vv3rr7awcd6	db8339c7-8121-43a1-a4a1-5753ef74e546	credentials	credentials	db8339c7-8121-43a1-a4a1-5753ef74e546	\N	\N	\N	\N	\N	\N	\N
clezyymsa00191vv3p0d3frup	34af72dc-00c4-49ea-ad18-abf5252ecaac	credentials	credentials	34af72dc-00c4-49ea-ad18-abf5252ecaac	\N	\N	\N	\N	\N	\N	\N
clezyzym7001d1vv3qujwsazu	99fc308d-c289-492b-8aac-edda4e46f2d2	credentials	credentials	99fc308d-c289-492b-8aac-edda4e46f2d2	\N	\N	\N	\N	\N	\N	\N
clezz1aol001h1vv3gpi67tv4	e0d042b1-5877-428d-815d-21399ccdf733	credentials	credentials	e0d042b1-5877-428d-815d-21399ccdf733	\N	\N	\N	\N	\N	\N	\N
clezz2mwr001l1vv32splzfs7	5aa19037-64b6-4f4b-a0b9-dda382a7b693	credentials	credentials	5aa19037-64b6-4f4b-a0b9-dda382a7b693	\N	\N	\N	\N	\N	\N	\N
clezz40al001p1vv3u82o0g5z	7cda6303-7485-49c0-b1d3-1f813f920837	credentials	credentials	7cda6303-7485-49c0-b1d3-1f813f920837	\N	\N	\N	\N	\N	\N	\N
clezz5kde001t1vv3d8gbqgz9	e0a1f803-fb6f-4b81-a769-fec69eabc597	credentials	credentials	e0a1f803-fb6f-4b81-a769-fec69eabc597	\N	\N	\N	\N	\N	\N	\N
clezz6lgy001x1vv36uubrs1x	63997ecf-0e3c-4191-a1fc-dd209bb1b262	credentials	credentials	63997ecf-0e3c-4191-a1fc-dd209bb1b262	\N	\N	\N	\N	\N	\N	\N
clezz8dh300211vv31mnp9dv4	97287d1f-31d9-4f98-a0da-8a19db3fe814	credentials	credentials	97287d1f-31d9-4f98-a0da-8a19db3fe814	\N	\N	\N	\N	\N	\N	\N
clezz9bqe00251vv3ow9swl4y	1ab6df82-01a9-4443-a3a1-4de849ab54e3	credentials	credentials	1ab6df82-01a9-4443-a3a1-4de849ab54e3	\N	\N	\N	\N	\N	\N	\N
clezzaqyz00291vv3wq2aj5zl	107d9117-e561-42e3-9278-23bd647ed018	credentials	credentials	107d9117-e561-42e3-9278-23bd647ed018	\N	\N	\N	\N	\N	\N	\N
clezzbvo6002d1vv3rclqo3va	ae8f6a89-a0bc-4ba5-b3e0-4e7711b0a073	credentials	credentials	ae8f6a89-a0bc-4ba5-b3e0-4e7711b0a073	\N	\N	\N	\N	\N	\N	\N
clezzcvti002h1vv36swcvby5	edaf86bf-e912-4f2b-b503-ce9ccbec2ffe	credentials	credentials	edaf86bf-e912-4f2b-b503-ce9ccbec2ffe	\N	\N	\N	\N	\N	\N	\N
clezzf8o9002l1vv3adjk5i8l	6f69724d-8513-42b8-975f-2564b5b52a2a	credentials	credentials	6f69724d-8513-42b8-975f-2564b5b52a2a	\N	\N	\N	\N	\N	\N	\N
clezzgkdy002p1vv3g0n0jf0b	2e31804d-8bf7-417f-8d11-4883981b15ad	credentials	credentials	2e31804d-8bf7-417f-8d11-4883981b15ad	\N	\N	\N	\N	\N	\N	\N
clezzhin8002t1vv3cu4a5bwr	fc971f06-360b-463d-a8f6-99b834019ada	credentials	credentials	fc971f06-360b-463d-a8f6-99b834019ada	\N	\N	\N	\N	\N	\N	\N
clezzixj0002x1vv3m1rqz2rr	32b0daa1-4b9e-4754-9862-c7a5e54e7ec6	credentials	credentials	32b0daa1-4b9e-4754-9862-c7a5e54e7ec6	\N	\N	\N	\N	\N	\N	\N
clezzk8m300311vv36gxgpqyu	6a9ebd64-ef85-4d42-8dfc-fabb8d6d6816	credentials	credentials	6a9ebd64-ef85-4d42-8dfc-fabb8d6d6816	\N	\N	\N	\N	\N	\N	\N
clezzm15600351vv35edjwsr2	27643b9b-e4a6-4e0f-9f33-9d54c70d8c14	credentials	credentials	27643b9b-e4a6-4e0f-9f33-9d54c70d8c14	\N	\N	\N	\N	\N	\N	\N
clezzmwyp00391vv3qzubloh9	10860374-bcc3-493d-ad30-f1e1c3bb1376	credentials	credentials	10860374-bcc3-493d-ad30-f1e1c3bb1376	\N	\N	\N	\N	\N	\N	\N
clezzo5xl003d1vv31hb6lc7e	bf50f31b-a7a8-4d7a-bdad-09d503b5e3b8	credentials	credentials	bf50f31b-a7a8-4d7a-bdad-09d503b5e3b8	\N	\N	\N	\N	\N	\N	\N
clezzp73e003h1vv3wkzl6ofp	77bda5e9-680f-4ed1-a205-ae63bf15d72e	credentials	credentials	77bda5e9-680f-4ed1-a205-ae63bf15d72e	\N	\N	\N	\N	\N	\N	\N
clezzq269003l1vv3tppmkbnf	584f4f3c-97d5-484e-8c43-12d4229bd45e	credentials	credentials	584f4f3c-97d5-484e-8c43-12d4229bd45e	\N	\N	\N	\N	\N	\N	\N
clezzrlcy003p1vv3tgiic0t8	2087a2e1-f42c-4cc5-bba0-6d72cf360568	credentials	credentials	2087a2e1-f42c-4cc5-bba0-6d72cf360568	\N	\N	\N	\N	\N	\N	\N
clezzsdet003t1vv32lhgdoq5	1af99348-76e4-4f14-83d3-4031b04e61d0	credentials	credentials	1af99348-76e4-4f14-83d3-4031b04e61d0	\N	\N	\N	\N	\N	\N	\N
clezzurpa003x1vv3tqj2zpdw	2ace7047-22c7-4de6-a7a0-66a6152619c4	credentials	credentials	2ace7047-22c7-4de6-a7a0-66a6152619c4	\N	\N	\N	\N	\N	\N	\N
clezzvroh00411vv3khtnz3wx	87cf0d47-0681-4720-8071-372d7d0c9ef3	credentials	credentials	87cf0d47-0681-4720-8071-372d7d0c9ef3	\N	\N	\N	\N	\N	\N	\N
clezzx1zg00451vv3vcafn1ij	e94005aa-e19f-4967-8e55-a7213d915b60	credentials	credentials	e94005aa-e19f-4967-8e55-a7213d915b60	\N	\N	\N	\N	\N	\N	\N
clezzyzyv00491vv3a5b1nqzs	f4766e7e-4e89-4c07-9703-732f525583bc	credentials	credentials	f4766e7e-4e89-4c07-9703-732f525583bc	\N	\N	\N	\N	\N	\N	\N
clezzzvsx004d1vv3zstooedu	80a20319-0ff8-40f0-932c-b1ac66a15825	credentials	credentials	80a20319-0ff8-40f0-932c-b1ac66a15825	\N	\N	\N	\N	\N	\N	\N
clf000tw2004h1vv3zh8k76vl	f922eeb8-910f-4312-a72a-0dc08ee98d75	credentials	credentials	f922eeb8-910f-4312-a72a-0dc08ee98d75	\N	\N	\N	\N	\N	\N	\N
clf001rmk004l1vv3sf0cmp3l	e5029c0f-52e0-4681-b1a4-409749b86225	credentials	credentials	e5029c0f-52e0-4681-b1a4-409749b86225	\N	\N	\N	\N	\N	\N	\N
clf002nf3004p1vv3zur18fen	28dfc0d2-5c24-4498-bee3-eb7c81b79540	credentials	credentials	28dfc0d2-5c24-4498-bee3-eb7c81b79540	\N	\N	\N	\N	\N	\N	\N
clf003ufk004t1vv3s3f8w73q	04236eb0-2ad6-431b-b409-e966a3d189b2	credentials	credentials	04236eb0-2ad6-431b-b409-e966a3d189b2	\N	\N	\N	\N	\N	\N	\N
clf004v79004x1vv3avmzontz	c2e7d6c7-1814-4573-9c15-a4fc8f2dc4a3	credentials	credentials	c2e7d6c7-1814-4573-9c15-a4fc8f2dc4a3	\N	\N	\N	\N	\N	\N	\N
clf005sqh00511vv3mt6uuwdo	b88b8984-cdf3-462d-8b90-0d59aceabf3d	credentials	credentials	b88b8984-cdf3-462d-8b90-0d59aceabf3d	\N	\N	\N	\N	\N	\N	\N
clf007mt400551vv3vgpcyt8w	ea7945d6-69aa-46ea-a662-231d8b4742d9	credentials	credentials	ea7945d6-69aa-46ea-a662-231d8b4742d9	\N	\N	\N	\N	\N	\N	\N
clf008ppp00591vv3rtvh7u7o	e4400653-efb4-49a9-b878-657a80ff0371	credentials	credentials	e4400653-efb4-49a9-b878-657a80ff0371	\N	\N	\N	\N	\N	\N	\N
clf009xl7005d1vv377qc28c5	59e389b4-3eb3-4078-beaa-16407064f59a	credentials	credentials	59e389b4-3eb3-4078-beaa-16407064f59a	\N	\N	\N	\N	\N	\N	\N
clf00b7lg005h1vv3yjlynxoc	746454e7-b2ce-4f3b-8483-cbd7a660c3b9	credentials	credentials	746454e7-b2ce-4f3b-8483-cbd7a660c3b9	\N	\N	\N	\N	\N	\N	\N
clf00bvcd005l1vv3vv2k6lxr	edd9f103-cf42-4ddc-ba42-b91b5f715ad2	credentials	credentials	edd9f103-cf42-4ddc-ba42-b91b5f715ad2	\N	\N	\N	\N	\N	\N	\N
clf00cgrq005p1vv353vokjbk	0795c16c-1b59-4ccf-906a-0a8683c73eda	credentials	credentials	0795c16c-1b59-4ccf-906a-0a8683c73eda	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: AwardToken; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AwardToken" (id, "studentId", type) FROM stdin;
8d520bb2-e411-4c7b-a2ba-5e201c4d7d0c	1	NORMAL
\.


--
-- Data for Name: CV; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CV" (id, "cvLocation", "studentId") FROM stdin;
1	https://fsdev.tech/static/media/CV-EN.0d8e03b2.pdf	1
\.


--
-- Data for Name: CompanyCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompanyCategory" (id, name) FROM stdin;
4	AI
1	Platina
2	Gold
3	Silver
\.


--
-- Data for Name: CompanyCode; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompanyCode" (id, "companyId", permanent, "socketId") FROM stdin;
54799d63-8c39-456c-a2bb-68577dd1bfd7	1	t	
\.


--
-- Data for Name: CompanyDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompanyDetails" (id, "categoryId", username, password, "userId") FROM stdin;
2	2	ist197433	$2b$10$OAqaJiy2JJjXiV1fsaGK1ulbwLUnOxJpjtC9TkYvzxy/LmnM7SJG.	afe45ddc-b884-4f09-b9a4-f3b55c87848c
3	3	accenture	$2b$10$GdE02R8WdESDUe.KDrFkk.rsaYNJEOO2zy/TGHnLjrgnQQ1ln3Dj.	43f04094-2a68-457d-b4fa-7993cbda48cb
4	1	avanade	$2b$10$hyULPt1EOv433kuLexnmKOsJRUgZGmCwAewnMgiFFx./PLEETMKdG	7ad71efa-1799-417a-a32c-5bc3c56f47cc
5	1	bizay_group	$2b$10$hxFcRhokgr54cpv.GW8Ww.F6Bwib6nDJSckBkzTu07AZjytYlT1aO	7026cec1-97cd-48ff-9167-d69ec8b631d4
6	3	blip	$2b$10$spVfyGadnl.kCvFyxOuE6e7xa7U98ptSd4baKrPY1FFzf.LfajCHm	9d35cb05-040f-407a-a0b4-167f41df97a8
7	1	bravantic	$2b$10$h/gUIyIY5dNt5V1aSr34GePJfiZJ9md5sWDLMOYyVRQTNyLscQLVy	66815ed7-1b95-493b-8b7c-89187bb58eaa
8	1	celfocus	$2b$10$bbz1uLNw8BSmq9BgoHS3/O7MHgliT4Kl/kjyeuzKxCFZq8HCOmYK2	48428234-9d46-4e45-9e0e-20d9ccba5594
9	2	critical_techworks	$2b$10$RbPWpWgrJrLKM9lISkyaWOPEhu71Y//phTlgarE/.z4Wovs1QAqX6	06f3049f-a9a0-4442-837d-bda3cc4ac3da
10	2	ntt_data	$2b$10$0X7.kJBwaK6GTnOpNG7Qw.sYFdGUZSaUhO0Av1zAHcKlE6e5As7SC	319ceae7-ea49-4a35-aa25-763f3b6c9bb0
11	1	fidelidade	$2b$10$lqeDvsSOXfQPVJ0fLZA6nOk2u06PwMGb19Pic1L1ZX8x7qNz1GTny	45635aa1-005d-44a3-a0a9-d3e3e52bc38b
12	2	hitachi	$2b$10$/c0M8o15pJfdKn5Z/5YKo.Xx2tuMIzQn5SDyc0T8.zo901CN/EFmG	e90213c1-f26a-49c8-a2c4-5b4ca5b35841
13	2	inetum	$2b$10$8Umaf141XT3vk5RVrP/wQu5CFGp3ZcoLV9uMZiWKGuq1n5M.Ty6kO	db8339c7-8121-43a1-a4a1-5753ef74e546
14	1	innovation_makers	$2b$10$sI7PHRhPlC4Nx7k.fze/iOODQdC0piH3HoCGOknBr90nTsJIORT2W	34af72dc-00c4-49ea-ad18-abf5252ecaac
15	2	innowave	$2b$10$Inb11v4WI2r9onA4h2LUUOM/eJabFk7C1yd9SPCY4mzZax9jVCvPe	99fc308d-c289-492b-8aac-edda4e46f2d2
16	1	jeronimo_martins	$2b$10$j7P4/zUigo75H30BvLM5vO3eTOeu2oLS21xmhibveEXT2Jc0wWjFu	e0d042b1-5877-428d-815d-21399ccdf733
17	1	nos	$2b$10$nbM6BSHdDhDev1x1n7Cjs.70SXXaC/zPzHLw3Wz0RnwoRmVBOL9ga	5aa19037-64b6-4f4b-a0b9-dda382a7b693
18	1	pwc	$2b$10$wg3ti5MAH5Qpg7AUJjq98u9Wg.1.1mChr0hF5sY2NpydH1oF1EfzK	7cda6303-7485-49c0-b1d3-1f813f920837
19	1	santander	$2b$10$z/DxvQtNniR3SLV8bg7EwecHB7fvpYa9S.JOC2XIpSAJ6qO9vCA.C	e0a1f803-fb6f-4b81-a769-fec69eabc597
20	2	siscog	$2b$10$1rqWoU1BQehCnhJsYGEnSOoe.SgezanUIvp8Lb5xUX9S8fkRntrKS	63997ecf-0e3c-4191-a1fc-dd209bb1b262
21	2	skyline	$2b$10$5MRYUvtNP74GEBdnn0fNSeNLeHRs9Xf9KTwioT02pnIPPlqy5MKJa	97287d1f-31d9-4f98-a0da-8a19db3fe814
22	2	syone	$2b$10$mFJVzCN4CYxIFB4DUAGCU.1M3FbzCBAuWqJCVvSlXiYtYbLUN1YBC	1ab6df82-01a9-4443-a3a1-4de849ab54e3
23	2	unicre	$2b$10$tGOMgNRbsexecWfDIRoZf.Hpq5bvzaKw2mgXcIuVJ6VQ/1r5bVbZa	107d9117-e561-42e3-9278-23bd647ed018
24	1	vtxrm	$2b$10$98fnY0JUsrnTZC.XIFsk1Oh5XrS.3Md5sA/anVp/jclYwtO6aWIQm	ae8f6a89-a0bc-4ba5-b3e0-4e7711b0a073
25	3	worten	$2b$10$zE2zM1NW8FrgSRA/A1fb.e...4bX9BtsM0JDj8PJDzXNFgCjjNnrC	edaf86bf-e912-4f2b-b503-ce9ccbec2ffe
26	2	kaizen	$2b$10$U3CHmNSXRm4srbZcFhAEcua1siozPVLvbbbBOGjrED7mRFArL5m6y	6f69724d-8513-42b8-975f-2564b5b52a2a
27	2	warpcom	$2b$10$vHU/E6zLMzdkhXASYLaoQ.Xqw8uqejx3IiHrm7rB/8GqUJP8jNzcq	2e31804d-8bf7-417f-8d11-4883981b15ad
28	2	affinity	$2b$10$P1xWHv6AgTjaKflKF9ODq.D88oRj9uMQsvr3PpCk9YJR/pY6X.GjO	fc971f06-360b-463d-a8f6-99b834019ada
29	2	glint	$2b$10$FQ4m2nMprGy9LM1SYSSN.OvBVu/vZ.AbcRnHPz9aMp8v0fjh1Na7O	32b0daa1-4b9e-4754-9862-c7a5e54e7ec6
30	2	siemens	$2b$10$P5jMK4xMeMGmnWcA1Kpb3./2QAiDpjmRU4O/NlMHC.KurtpXFH9XW	6a9ebd64-ef85-4d42-8dfc-fabb8d6d6816
31	1	bose	$2b$10$0DGBFer2k7HueD7RvVU.Luq5mW3hxGyrd4LhnLITDdwwzxZp1qe5G	27643b9b-e4a6-4e0f-9f33-9d54c70d8c14
32	1	tranquilidade	$2b$10$trPArGR7eXNOOlwyJMZ5z.4gNFAjIr8erB91mkFPSJTPuHIzoDlF2	10860374-bcc3-493d-ad30-f1e1c3bb1376
33	2	neyond	$2b$10$71Y4Gc/kKUWm173XwxNYVOK3.tkeNh1WHYXJhioWyxGKfC/G1/VaK	bf50f31b-a7a8-4d7a-bdad-09d503b5e3b8
34	1	indie_campers	$2b$10$8ahfZKvV8Q4TsBRLFt6/K.58B3jVmHeFVNZesDh.2FldiGj16vzeq	77bda5e9-680f-4ed1-a205-ae63bf15d72e
35	2	noesis	$2b$10$RUc9yPk08mbjLkQwA3.wMuVlCN5S/2ZXflQvF06zZNAxsW29N5g8y	584f4f3c-97d5-484e-8c43-12d4229bd45e
36	3	bubble_go	$2b$10$xORUkAuEkyck376e3ee5a.vjR7MRa1BNrqxgSrAG8cN43YGVjLAty	2087a2e1-f42c-4cc5-bba0-6d72cf360568
37	1	deloitte	$2b$10$R6hL6U20hJo18Sr0198dB.NRWR0/rbY6LQlVnK6ICOWtQArWh7A/a	1af99348-76e4-4f14-83d3-4031b04e61d0
38	1	crossjoin	$2b$10$9MqGHXl4G0IZluKi3CduzOUBfi1ryDE0nkISewElzl10KDlK7jlwy	2ace7047-22c7-4de6-a7a0-66a6152619c4
39	3	auchan	$2b$10$yIrGwaSdtW/hldBVAUyc.uur6DIRjpMTL.Jvcc.UVOL8Oc0.LbOT2	87cf0d47-0681-4720-8071-372d7d0c9ef3
40	2	hccm	$2b$10$NUW.0/teBUjpR0hpvO3x1u9eOxFLayMli3HiGJuhEEsM5R09bwxNu	e94005aa-e19f-4967-8e55-a7213d915b60
41	2	mi_gso	$2b$10$bBgXCpeNiHLhysipbvYjl.2MubuqpfhNjnU.9wPz7BU0Unx7EP6LK	f4766e7e-4e89-4c07-9703-732f525583bc
42	2	bnp	$2b$10$cEeCfmE699O3ieuQiTyROeYWGMqXDvnnAqkf6tv5g4A0LE127nypO	80a20319-0ff8-40f0-932c-b1ac66a15825
43	2	logicalis	$2b$10$UWbsaYHk2AFqfmEoNehGHuY5Op9W7glTkJDB5ElmOXkc18a4jHXcy	f922eeb8-910f-4312-a72a-0dc08ee98d75
44	1	brighten	$2b$10$EgoTmMcne5dH5qMuyQX6R.vTYYx5eU26YuaCOyClROIR7D8ig5FgK	e5029c0f-52e0-4681-b1a4-409749b86225
45	2	vodafone	$2b$10$zS0HouRX3s8ogvra7OnsfeWSdP/lntKU06aKX0M0sXf9VUbkPJ95m	28dfc0d2-5c24-4498-bee3-eb7c81b79540
46	2	mota_engil	$2b$10$iWNKb5JBF0R90pQZq.QbcusST79BW4pcThGlF4RuZmqLp/EOPS1ta	04236eb0-2ad6-431b-b409-e966a3d189b2
47	2	carmona	$2b$10$FLoPbPgjZEMh6tl2twPpJu.UroorZmXtBjPpyK0kJIVO/2vcnTKrO	c2e7d6c7-1814-4573-9c15-a4fc8f2dc4a3
48	2	axians	$2b$10$as1XQmyDKpT1hEfSR8yTUuyRasp7bLBAORmEmIP2hoLocBFAVrKt2	b88b8984-cdf3-462d-8b90-0d59aceabf3d
49	1	brisa	$2b$10$Bi0fLxXSL7LJXjNDsGF0qeH9c3y6bv8ELCfA1WiWOZCaYbTw.TEtu	ea7945d6-69aa-46ea-a662-231d8b4742d9
50	3	izertis	$2b$10$eMf/jcak7dxtbU0pCihvre0/CIz7IXQlP/NSHo0COdu6dufMy05Bm	e4400653-efb4-49a9-b878-657a80ff0371
51	2	aurora_energy	$2b$10$uoD3vmejQ11OoEs/4jsfWeSS6S6QiXB7JAFsseLRLK9z6PJ3ejKuG	59e389b4-3eb3-4078-beaa-16407064f59a
52	1	montepio	$2b$10$0DdA4C7bY66wCyp.zJos/./Yz.5ZT/S2v.PR/T6iSv7djvyDmKTIe	746454e7-b2ce-4f3b-8483-cbd7a660c3b9
53	3	ey	$2b$10$tdPRDkDaQSqDnGgokIkZk.PcNY6NVd5oKLS5zxj5XQu95dGM2u4SC	edd9f103-cf42-4ddc-ba42-b91b5f715ad2
54	3	cofidis	$2b$10$hEky6KA9xhmWdgNS1CSV3uZyYE4po4AvrpXK7PRgdx/w6VSIEfRaK	0795c16c-1b59-4ccf-906a-0a8683c73eda
1	1	company	$2b$10$YkFyIEwCCYl3CF/5Gc2wzOL0LZFtDOz3Uxagvhl9K7ZezdTPK2MDi	32dd624d-a182-4eaa-84da-ebec8c74f38f
\.


--
-- Data for Name: Session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Session" (id, "sessionToken", "userId", expires) FROM stdin;
clf04sf9v00011v9cycymqvhp	b97edc2c-9cfa-4c8f-a2a3-38edce921880	32dd624d-a182-4eaa-84da-ebec8c74f38f	2023-04-07 20:27:05.681
clf1dh8bz0001qxs08euim1dv	23c92d19-85f0-4df2-9596-a2c75eab32c9	5362bb0d-67a8-4347-abb5-80a3ef435724	2023-04-08 17:18:06.185
\.


--
-- Data for Name: Speaker; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Speaker" (id, title, name, date, description) FROM stdin;
\.


--
-- Data for Name: StudentDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."StudentDetails" (id, age, scans, points, course, university, companies_ids, "userId", reedems) FROM stdin;
1	22	11	55	Educação e Formação	Universidade de Lisboa - Instituto de Educação	{32dd624d-a182-4eaa-84da-ebec8c74f38f,32dd624d-a182-4eaa-84da-ebec8c74f38f}	5362bb0d-67a8-4347-abb5-80a3ef435724	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, "emailVerified", image, role) FROM stdin;
5362bb0d-67a8-4347-abb5-80a3ef435724	Francisco Machuca Ribeiro e Silva	francisco.r.e.silva@tecnico.ulisboa.pt	\N	\N	STUDENT
afe45ddc-b884-4f09-b9a4-f3b55c87848c	Francisco Silva	marketing.su@novasbe.pt	\N	\N	STUDENT
43f04094-2a68-457d-b4fa-7993cbda48cb	Accenture	accenture@set.ulisboa.pt	\N	\N	COMPANY
7ad71efa-1799-417a-a32c-5bc3c56f47cc	Avanade	avanade@set.ulisboa.pt	\N	\N	COMPANY
7026cec1-97cd-48ff-9167-d69ec8b631d4	Bizay Group	bizay_group@set.ulisboa.pt	\N	\N	COMPANY
9d35cb05-040f-407a-a0b4-167f41df97a8	BLIP	blip@set.ulisboa.pt	\N	\N	COMPANY
66815ed7-1b95-493b-8b7c-89187bb58eaa	Bravantic	bravantic@set.ulisboa.pt	\N	\N	COMPANY
48428234-9d46-4e45-9e0e-20d9ccba5594	Celfocus	celfocus@set.ulisboa.pt	\N	\N	COMPANY
06f3049f-a9a0-4442-837d-bda3cc4ac3da	Critical Techworks	critical_techworks@set.ulisboa.pt	\N	\N	COMPANY
319ceae7-ea49-4a35-aa25-763f3b6c9bb0	NTT Data	ntt_data@set.ulisboa.pt	\N	\N	COMPANY
45635aa1-005d-44a3-a0a9-d3e3e52bc38b	Fidelidade	fidelidade@set.ulisboa.pt	\N	\N	COMPANY
e90213c1-f26a-49c8-a2c4-5b4ca5b35841	Hitachi	hitachi@set.ulisboa.pt	\N	\N	COMPANY
db8339c7-8121-43a1-a4a1-5753ef74e546	Inetum	inetum@set.ulisboa.pt	\N	\N	COMPANY
34af72dc-00c4-49ea-ad18-abf5252ecaac	Innovation Makers	innovation_makers@set.ulisboa.pt	\N	\N	COMPANY
99fc308d-c289-492b-8aac-edda4e46f2d2	Innowave	innowave@set.ulisboa.pt	\N	\N	COMPANY
e0d042b1-5877-428d-815d-21399ccdf733	Jerónimo Martins	jeronimo_martins@set.ulisboa.pt	\N	\N	COMPANY
5aa19037-64b6-4f4b-a0b9-dda382a7b693	NOS	nos@set.ulisboa.pt	\N	\N	COMPANY
7cda6303-7485-49c0-b1d3-1f813f920837	PwC	pwc@set.ulisboa.pt	\N	\N	COMPANY
e0a1f803-fb6f-4b81-a769-fec69eabc597	Santander	santander@set.ulisboa.pt	\N	\N	COMPANY
63997ecf-0e3c-4191-a1fc-dd209bb1b262	Siscog	siscog@set.ulisboa.pt	\N	\N	COMPANY
97287d1f-31d9-4f98-a0da-8a19db3fe814	Skyline	skyline@set.ulisboa.pt	\N	\N	COMPANY
1ab6df82-01a9-4443-a3a1-4de849ab54e3	Syone	syone@set.ulisboa.pt	\N	\N	COMPANY
107d9117-e561-42e3-9278-23bd647ed018	UNICRE	unicre@set.ulisboa.pt	\N	\N	COMPANY
ae8f6a89-a0bc-4ba5-b3e0-4e7711b0a073	VTXRM	vtxrm@set.ulisboa.pt	\N	\N	COMPANY
edaf86bf-e912-4f2b-b503-ce9ccbec2ffe	Worten	worten@set.ulisboa.pt	\N	\N	COMPANY
6f69724d-8513-42b8-975f-2564b5b52a2a	Kaizen	kaizen@set.ulisboa.pt	\N	\N	COMPANY
2e31804d-8bf7-417f-8d11-4883981b15ad	Warpcom	warpcom@set.ulisboa.pt	\N	\N	COMPANY
fc971f06-360b-463d-a8f6-99b834019ada	Affinity	affinity@set.ulisboa.pt	\N	\N	COMPANY
32b0daa1-4b9e-4754-9862-c7a5e54e7ec6	Glint	glint@set.ulisboa.pt	\N	\N	COMPANY
6a9ebd64-ef85-4d42-8dfc-fabb8d6d6816	Siemens	siemens@set.ulisboa.pt	\N	\N	COMPANY
27643b9b-e4a6-4e0f-9f33-9d54c70d8c14	BOSE	bose@set.ulisboa.pt	\N	\N	COMPANY
10860374-bcc3-493d-ad30-f1e1c3bb1376	Tranquilidade	tranquilidade@set.ulisboa.pt	\N	\N	COMPANY
bf50f31b-a7a8-4d7a-bdad-09d503b5e3b8	Neyond	neyond@set.ulisboa.pt	\N	\N	COMPANY
77bda5e9-680f-4ed1-a205-ae63bf15d72e	Indie Campers	indie_campers@set.ulisboa.pt	\N	\N	COMPANY
584f4f3c-97d5-484e-8c43-12d4229bd45e	Noesis	noesis@set.ulisboa.pt	\N	\N	COMPANY
2087a2e1-f42c-4cc5-bba0-6d72cf360568	Bubble Go	bubble_go@set.ulisboa.pt	\N	\N	COMPANY
1af99348-76e4-4f14-83d3-4031b04e61d0	Deloitte	deloitte@set.ulisboa.pt	\N	\N	COMPANY
2ace7047-22c7-4de6-a7a0-66a6152619c4	Crossjoin Solutions	crossjoin@set.ulisboa.pt	\N	\N	COMPANY
87cf0d47-0681-4720-8071-372d7d0c9ef3	Auchan	auchan@set.ulisboa.pt	\N	\N	COMPANY
e94005aa-e19f-4967-8e55-a7213d915b60	HCCM	hccm@set.ulisboa.pt	\N	\N	COMPANY
f4766e7e-4e89-4c07-9703-732f525583bc	MI-GSO	mi_gso@set.ulisboa.pt	\N	\N	COMPANY
80a20319-0ff8-40f0-932c-b1ac66a15825	BNP Pariba	bnp@set.ulisboa.pt	\N	\N	COMPANY
f922eeb8-910f-4312-a72a-0dc08ee98d75	Logicalis	logicalis@set.ulisboa.pt	\N	\N	COMPANY
e5029c0f-52e0-4681-b1a4-409749b86225	Brighten	brighten@set.ulisboa.pt	\N	\N	COMPANY
28dfc0d2-5c24-4498-bee3-eb7c81b79540	Vodafone	vodafone@set.ulisboa.pt	\N	\N	COMPANY
04236eb0-2ad6-431b-b409-e966a3d189b2	Mota-Engil	mota_engil@set.ulisboa.pt	\N	\N	COMPANY
c2e7d6c7-1814-4573-9c15-a4fc8f2dc4a3	carmona	carmona@set.ulisboa.pt	\N	\N	COMPANY
b88b8984-cdf3-462d-8b90-0d59aceabf3d	Axians	axians@set.ulisboa.pt	\N	\N	COMPANY
ea7945d6-69aa-46ea-a662-231d8b4742d9	Brisa	brisa@set.ulisboa.pt	\N	\N	COMPANY
e4400653-efb4-49a9-b878-657a80ff0371	Izertis	izertis@set.ulisboa.pt	\N	\N	COMPANY
59e389b4-3eb3-4078-beaa-16407064f59a	Aurora Energy	aurora_energy@set.ulisboa.pt	\N	\N	COMPANY
746454e7-b2ce-4f3b-8483-cbd7a660c3b9	Montepio	montepio@set.ulisboa.pt	\N	\N	COMPANY
edd9f103-cf42-4ddc-ba42-b91b5f715ad2	EY	ey@set.ulisboa.pt	\N	\N	COMPANY
0795c16c-1b59-4ccf-906a-0a8683c73eda	Cofidis	cofidis@set.ulisboa.pt	\N	\N	COMPANY
32dd624d-a182-4eaa-84da-ebec8c74f38f	Example company	rh@example.com	\N	https://www.meiosepublicidade.pt/wp-content/uploads/2019/12/indie-campers-logo.jpg	COMPANY
\.


--
-- Data for Name: VerificationToken; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."VerificationToken" (identifier, token, expires) FROM stdin;
\.


--
-- Data for Name: Workshop; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Workshop" (id, name, date, description, "companyId") FROM stdin;
\.


--
-- Data for Name: _CompanyDetailsToStudentDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."_CompanyDetailsToStudentDetails" ("A", "B") FROM stdin;
1	1
\.


--
-- Name: CV_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CV_id_seq"', 1, true);


--
-- Name: CompanyCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CompanyCategory_id_seq"', 4, true);


--
-- Name: CompanyDetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CompanyDetails_id_seq"', 54, true);


--
-- Name: Speaker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Speaker_id_seq"', 1, false);


--
-- Name: StudentDetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."StudentDetails_id_seq"', 1, true);


--
-- Name: Workshop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Workshop_id_seq"', 1, false);


--
-- Name: Account Account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_pkey" PRIMARY KEY (id);


--
-- Name: AwardToken AwardToken_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AwardToken"
    ADD CONSTRAINT "AwardToken_pkey" PRIMARY KEY (id);


--
-- Name: CV CV_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CV"
    ADD CONSTRAINT "CV_pkey" PRIMARY KEY (id);


--
-- Name: CompanyCategory CompanyCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyCategory"
    ADD CONSTRAINT "CompanyCategory_pkey" PRIMARY KEY (id);


--
-- Name: CompanyCode CompanyCode_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyCode"
    ADD CONSTRAINT "CompanyCode_pkey" PRIMARY KEY (id);


--
-- Name: CompanyDetails CompanyDetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyDetails"
    ADD CONSTRAINT "CompanyDetails_pkey" PRIMARY KEY (id);


--
-- Name: Session Session_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_pkey" PRIMARY KEY (id);


--
-- Name: Speaker Speaker_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Speaker"
    ADD CONSTRAINT "Speaker_pkey" PRIMARY KEY (id);


--
-- Name: StudentDetails StudentDetails_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."StudentDetails"
    ADD CONSTRAINT "StudentDetails_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: Workshop Workshop_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Workshop"
    ADD CONSTRAINT "Workshop_pkey" PRIMARY KEY (id);


--
-- Name: Account_provider_providerAccountId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON public."Account" USING btree (provider, "providerAccountId");


--
-- Name: AwardToken_studentId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "AwardToken_studentId_key" ON public."AwardToken" USING btree ("studentId");


--
-- Name: CV_studentId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "CV_studentId_key" ON public."CV" USING btree ("studentId");


--
-- Name: CompanyDetails_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "CompanyDetails_userId_key" ON public."CompanyDetails" USING btree ("userId");


--
-- Name: CompanyDetails_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "CompanyDetails_username_key" ON public."CompanyDetails" USING btree (username);


--
-- Name: Session_sessionToken_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Session_sessionToken_key" ON public."Session" USING btree ("sessionToken");


--
-- Name: StudentDetails_userId_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "StudentDetails_userId_key" ON public."StudentDetails" USING btree ("userId");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: VerificationToken_identifier_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON public."VerificationToken" USING btree (identifier, token);


--
-- Name: VerificationToken_token_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "VerificationToken_token_key" ON public."VerificationToken" USING btree (token);


--
-- Name: _CompanyDetailsToStudentDetails_AB_unique; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "_CompanyDetailsToStudentDetails_AB_unique" ON public."_CompanyDetailsToStudentDetails" USING btree ("A", "B");


--
-- Name: _CompanyDetailsToStudentDetails_B_index; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "_CompanyDetailsToStudentDetails_B_index" ON public."_CompanyDetailsToStudentDetails" USING btree ("B");


--
-- Name: Account Account_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Account"
    ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: AwardToken AwardToken_studentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AwardToken"
    ADD CONSTRAINT "AwardToken_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES public."StudentDetails"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CV CV_studentId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CV"
    ADD CONSTRAINT "CV_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES public."StudentDetails"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CompanyCode CompanyCode_companyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyCode"
    ADD CONSTRAINT "CompanyCode_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES public."CompanyDetails"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CompanyDetails CompanyDetails_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyDetails"
    ADD CONSTRAINT "CompanyDetails_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."CompanyCategory"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: CompanyDetails CompanyDetails_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompanyDetails"
    ADD CONSTRAINT "CompanyDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Session Session_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Session"
    ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: StudentDetails StudentDetails_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."StudentDetails"
    ADD CONSTRAINT "StudentDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Workshop Workshop_companyId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Workshop"
    ADD CONSTRAINT "Workshop_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES public."CompanyDetails"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: _CompanyDetailsToStudentDetails _CompanyDetailsToStudentDetails_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_CompanyDetailsToStudentDetails"
    ADD CONSTRAINT "_CompanyDetailsToStudentDetails_A_fkey" FOREIGN KEY ("A") REFERENCES public."CompanyDetails"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _CompanyDetailsToStudentDetails _CompanyDetailsToStudentDetails_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."_CompanyDetailsToStudentDetails"
    ADD CONSTRAINT "_CompanyDetailsToStudentDetails_B_fkey" FOREIGN KEY ("B") REFERENCES public."StudentDetails"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

