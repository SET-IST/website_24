--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Homebrew)

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
\.


--
-- Data for Name: AwardToken; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AwardToken" (id, "studentId", type) FROM stdin;
\.


--
-- Data for Name: CV; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CV" (id, "cvLocation", "studentId") FROM stdin;
\.


--
-- Data for Name: CompanyCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompanyCategory" (id, name) FROM stdin;
1	Frontend
2	Cloud Services
3	Fintech
4	AI
\.


--
-- Data for Name: CompanyCode; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompanyCode" (id, "companyId", permanent, "socketId") FROM stdin;
\.


--
-- Data for Name: CompanyDetails; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompanyDetails" (id, "categoryId", username, password, "userId") FROM stdin;
1	4	company	$2b$10$YkFyIEwCCYl3CF/5Gc2wzOL0LZFtDOz3Uxagvhl9K7ZezdTPK2MDi	32dd624d-a182-4eaa-84da-ebec8c74f38f
\.


--
-- Data for Name: Session; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Session" (id, "sessionToken", "userId", expires) FROM stdin;
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
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, "emailVerified", image, role) FROM stdin;
32dd624d-a182-4eaa-84da-ebec8c74f38f	Example company	rh@example.com	\N	\N	COMPANY
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
\.


--
-- Name: CV_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CV_id_seq"', 1, false);


--
-- Name: CompanyCategory_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CompanyCategory_id_seq"', 4, true);


--
-- Name: CompanyDetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."CompanyDetails_id_seq"', 1, true);


--
-- Name: Speaker_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Speaker_id_seq"', 1, false);


--
-- Name: StudentDetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."StudentDetails_id_seq"', 1, false);


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

