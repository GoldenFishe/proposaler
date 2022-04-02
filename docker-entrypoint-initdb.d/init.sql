--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2022-04-02 23:03:02

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 226 (class 1259 OID 16464)
-- Name: comment; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment (
    id integer NOT NULL,
    comment character varying NOT NULL,
    "createDatetime" timestamp without time zone DEFAULT now() NOT NULL,
    "authorId" integer NOT NULL,
    "proposalId" integer NOT NULL,
    "replyTo" integer
);


ALTER TABLE public.comment OWNER TO admin;

--
-- TOC entry 222 (class 1259 OID 16448)
-- Name: comment_dislike; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment_dislike (
    id integer NOT NULL,
    "commentId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.comment_dislike OWNER TO admin;

--
-- TOC entry 221 (class 1259 OID 16447)
-- Name: comment_dislike_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.comment_dislike_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_dislike_id_seq OWNER TO admin;

--
-- TOC entry 3412 (class 0 OID 0)
-- Dependencies: 221
-- Name: comment_dislike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_dislike_id_seq OWNED BY public.comment_dislike.id;


--
-- TOC entry 224 (class 1259 OID 16455)
-- Name: comment_file; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment_file (
    id integer NOT NULL,
    filename character varying NOT NULL,
    "commentId" integer NOT NULL
);


ALTER TABLE public.comment_file OWNER TO admin;

--
-- TOC entry 223 (class 1259 OID 16454)
-- Name: comment_file_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.comment_file_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_file_id_seq OWNER TO admin;

--
-- TOC entry 3413 (class 0 OID 0)
-- Dependencies: 223
-- Name: comment_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_file_id_seq OWNED BY public.comment_file.id;


--
-- TOC entry 225 (class 1259 OID 16463)
-- Name: comment_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_id_seq OWNER TO admin;

--
-- TOC entry 3414 (class 0 OID 0)
-- Dependencies: 225
-- Name: comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;


--
-- TOC entry 220 (class 1259 OID 16441)
-- Name: comment_like; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment_like (
    id integer NOT NULL,
    "commentId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.comment_like OWNER TO admin;

--
-- TOC entry 219 (class 1259 OID 16440)
-- Name: comment_like_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.comment_like_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.comment_like_id_seq OWNER TO admin;

--
-- TOC entry 3415 (class 0 OID 0)
-- Dependencies: 219
-- Name: comment_like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_like_id_seq OWNED BY public.comment_like.id;


--
-- TOC entry 218 (class 1259 OID 16431)
-- Name: proposal; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying NOT NULL,
    "createDatetime" timestamp without time zone DEFAULT now() NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.proposal OWNER TO admin;

--
-- TOC entry 214 (class 1259 OID 16415)
-- Name: proposal_dislike; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal_dislike (
    id integer NOT NULL,
    "proposalId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.proposal_dislike OWNER TO admin;

--
-- TOC entry 213 (class 1259 OID 16414)
-- Name: proposal_dislike_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.proposal_dislike_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proposal_dislike_id_seq OWNER TO admin;

--
-- TOC entry 3416 (class 0 OID 0)
-- Dependencies: 213
-- Name: proposal_dislike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_dislike_id_seq OWNED BY public.proposal_dislike.id;


--
-- TOC entry 216 (class 1259 OID 16422)
-- Name: proposal_file; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal_file (
    id integer NOT NULL,
    filename character varying NOT NULL,
    "proposalId" integer NOT NULL
);


ALTER TABLE public.proposal_file OWNER TO admin;

--
-- TOC entry 215 (class 1259 OID 16421)
-- Name: proposal_file_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.proposal_file_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proposal_file_id_seq OWNER TO admin;

--
-- TOC entry 3417 (class 0 OID 0)
-- Dependencies: 215
-- Name: proposal_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_file_id_seq OWNED BY public.proposal_file.id;


--
-- TOC entry 217 (class 1259 OID 16430)
-- Name: proposal_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.proposal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proposal_id_seq OWNER TO admin;

--
-- TOC entry 3418 (class 0 OID 0)
-- Dependencies: 217
-- Name: proposal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_id_seq OWNED BY public.proposal.id;


--
-- TOC entry 212 (class 1259 OID 16408)
-- Name: proposal_like; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal_like (
    id integer NOT NULL,
    "proposalId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.proposal_like OWNER TO admin;

--
-- TOC entry 211 (class 1259 OID 16407)
-- Name: proposal_like_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.proposal_like_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.proposal_like_id_seq OWNER TO admin;

--
-- TOC entry 3419 (class 0 OID 0)
-- Dependencies: 211
-- Name: proposal_like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_like_id_seq OWNED BY public.proposal_like.id;


--
-- TOC entry 210 (class 1259 OID 16397)
-- Name: user; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    login character varying NOT NULL,
    password character varying NOT NULL,
    username character varying NOT NULL,
    avatar character varying
);


ALTER TABLE public."user" OWNER TO admin;

--
-- TOC entry 209 (class 1259 OID 16396)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO admin;

--
-- TOC entry 3420 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 3213 (class 2604 OID 16467)
-- Name: comment id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);


--
-- TOC entry 3211 (class 2604 OID 16451)
-- Name: comment_dislike id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike ALTER COLUMN id SET DEFAULT nextval('public.comment_dislike_id_seq'::regclass);


--
-- TOC entry 3212 (class 2604 OID 16458)
-- Name: comment_file id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_file ALTER COLUMN id SET DEFAULT nextval('public.comment_file_id_seq'::regclass);


--
-- TOC entry 3210 (class 2604 OID 16444)
-- Name: comment_like id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like ALTER COLUMN id SET DEFAULT nextval('public.comment_like_id_seq'::regclass);


--
-- TOC entry 3208 (class 2604 OID 16434)
-- Name: proposal id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal ALTER COLUMN id SET DEFAULT nextval('public.proposal_id_seq'::regclass);


--
-- TOC entry 3206 (class 2604 OID 16418)
-- Name: proposal_dislike id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike ALTER COLUMN id SET DEFAULT nextval('public.proposal_dislike_id_seq'::regclass);


--
-- TOC entry 3207 (class 2604 OID 16425)
-- Name: proposal_file id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_file ALTER COLUMN id SET DEFAULT nextval('public.proposal_file_id_seq'::regclass);


--
-- TOC entry 3205 (class 2604 OID 16411)
-- Name: proposal_like id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like ALTER COLUMN id SET DEFAULT nextval('public.proposal_like_id_seq'::regclass);


--
-- TOC entry 3204 (class 2604 OID 16400)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3406 (class 0 OID 16464)
-- Dependencies: 226
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment (id, comment, "createDatetime", "authorId", "proposalId", "replyTo") FROM stdin;
5	qweqwe	2022-01-06 21:08:07.317138	1	2	\N
6	eqweq	2022-01-06 21:10:14.438143	1	2	\N
7	tttttttttttttttttt	2022-01-06 21:12:03.005124	1	2	\N
8	test	2022-01-07 16:44:04.000577	2	2	\N
9	eeqwe qweq we qwe qwe qwe qwe	2022-01-08 13:39:52.524016	1	2	\N
10	cat cat cat	2022-01-08 13:44:34.372477	1	2	\N
11	eqweqwe	2022-01-08 19:08:56.485433	1	2	\N
12	123	2022-01-08 19:10:22.62072	1	2	1
13	3333333	2022-01-08 19:10:59.869926	1	2	5
14	nnnnnnnnnnnnnnnn	2022-01-08 19:39:14.163588	1	2	10
15	123	2022-01-08 19:43:35.629098	1	2	\N
16	123123	2022-01-08 19:43:52.293282	1	2	5
\.


--
-- TOC entry 3402 (class 0 OID 16448)
-- Dependencies: 222
-- Data for Name: comment_dislike; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment_dislike (id, "commentId", "authorId") FROM stdin;
\.


--
-- TOC entry 3404 (class 0 OID 16455)
-- Dependencies: 224
-- Data for Name: comment_file; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment_file (id, filename, "commentId") FROM stdin;
2	files-1641492614400-451455647.jpg	6
3	files-1641492722979-151340756.jpg	7
4	files-1641638392445-212724686.jpg	9
5	files-1641638392448-769711453.jpg	9
6	files-1641638674294-652151696.jpg	10
7	files-1641638674295-607770965.jpg	10
8	files-1641638674296-883544902.jpg	10
9	files-1641638674296-675786801.jpg	10
10	files-1641638674297-224847849.jpg	10
\.


--
-- TOC entry 3400 (class 0 OID 16441)
-- Dependencies: 220
-- Data for Name: comment_like; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment_like (id, "commentId", "authorId") FROM stdin;
\.


--
-- TOC entry 3398 (class 0 OID 16431)
-- Dependencies: 218
-- Data for Name: proposal; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal (id, title, description, "createDatetime", "authorId") FROM stdin;
2	kkkk	ooooo	2022-01-06 20:31:59.221214	1
\.


--
-- TOC entry 3394 (class 0 OID 16415)
-- Dependencies: 214
-- Data for Name: proposal_dislike; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal_dislike (id, "proposalId", "authorId") FROM stdin;
\.


--
-- TOC entry 3396 (class 0 OID 16422)
-- Dependencies: 216
-- Data for Name: proposal_file; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal_file (id, filename, "proposalId") FROM stdin;
1	files-1641490319125-883161378.jpg	2
\.


--
-- TOC entry 3392 (class 0 OID 16408)
-- Dependencies: 212
-- Data for Name: proposal_like; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal_like (id, "proposalId", "authorId") FROM stdin;
\.


--
-- TOC entry 3390 (class 0 OID 16397)
-- Dependencies: 210
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."user" (id, login, password, username, avatar) FROM stdin;
2	test	test	test	\N
1	admin	admin	adminUsername	avatar-1641632743624-328589228.jpg
3	tttt	tttt	tttt	\N
4	eqweq	qweqwe	eqweq	\N
5	qweqweqwe	qweqweqwe	qeqweqwe	\N
\.


--
-- TOC entry 3421 (class 0 OID 0)
-- Dependencies: 221
-- Name: comment_dislike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_dislike_id_seq', 1, false);


--
-- TOC entry 3422 (class 0 OID 0)
-- Dependencies: 223
-- Name: comment_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_file_id_seq', 10, true);


--
-- TOC entry 3423 (class 0 OID 0)
-- Dependencies: 225
-- Name: comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_id_seq', 16, true);


--
-- TOC entry 3424 (class 0 OID 0)
-- Dependencies: 219
-- Name: comment_like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_like_id_seq', 1, false);


--
-- TOC entry 3425 (class 0 OID 0)
-- Dependencies: 213
-- Name: proposal_dislike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_dislike_id_seq', 1, false);


--
-- TOC entry 3426 (class 0 OID 0)
-- Dependencies: 215
-- Name: proposal_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_file_id_seq', 1, true);


--
-- TOC entry 3427 (class 0 OID 0)
-- Dependencies: 217
-- Name: proposal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_id_seq', 2, true);


--
-- TOC entry 3428 (class 0 OID 0)
-- Dependencies: 211
-- Name: proposal_like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_like_id_seq', 1, false);


--
-- TOC entry 3429 (class 0 OID 0)
-- Dependencies: 209
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- TOC entry 3230 (class 2606 OID 16446)
-- Name: comment_like PK_04f93e6f1ace5dbc1d8c562ccbf; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like
    ADD CONSTRAINT "PK_04f93e6f1ace5dbc1d8c562ccbf" PRIMARY KEY (id);


--
-- TOC entry 3236 (class 2606 OID 16472)
-- Name: comment PK_0b0e4bbc8415ec426f87f3a88e2; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY (id);


--
-- TOC entry 3234 (class 2606 OID 16462)
-- Name: comment_file PK_82d253ec0eee2847f7aed08cbf4; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_file
    ADD CONSTRAINT "PK_82d253ec0eee2847f7aed08cbf4" PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 16429)
-- Name: proposal_file PK_b8074b9a65dffc14640182bccc7; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_file
    ADD CONSTRAINT "PK_b8074b9a65dffc14640182bccc7" PRIMARY KEY (id);


--
-- TOC entry 3232 (class 2606 OID 16453)
-- Name: comment_dislike PK_c15642e15be48360a141a18e3c3; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike
    ADD CONSTRAINT "PK_c15642e15be48360a141a18e3c3" PRIMARY KEY (id);


--
-- TOC entry 3222 (class 2606 OID 16413)
-- Name: proposal_like PK_c6a2fae6f3b2acca12f40f6fb67; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like
    ADD CONSTRAINT "PK_c6a2fae6f3b2acca12f40f6fb67" PRIMARY KEY (id);


--
-- TOC entry 3228 (class 2606 OID 16439)
-- Name: proposal PK_ca872ecfe4fef5720d2d39e4275; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY (id);


--
-- TOC entry 3216 (class 2606 OID 16404)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 3224 (class 2606 OID 16420)
-- Name: proposal_dislike PK_e10cd66dc30022748e63bf942b5; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike
    ADD CONSTRAINT "PK_e10cd66dc30022748e63bf942b5" PRIMARY KEY (id);


--
-- TOC entry 3218 (class 2606 OID 16539)
-- Name: user UQ_78a916df40e02a9deb1c4b75edb; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);


--
-- TOC entry 3220 (class 2606 OID 16406)
-- Name: user UQ_a62473490b3e4578fd683235c5e; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE (login);


--
-- TOC entry 3241 (class 2606 OID 16493)
-- Name: proposal_file FK_1e9df891c89a21a9b91d948f00d; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_file
    ADD CONSTRAINT "FK_1e9df891c89a21a9b91d948f00d" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- TOC entry 3249 (class 2606 OID 16533)
-- Name: comment FK_276779da446413a0d79598d4fbd; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_276779da446413a0d79598d4fbd" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- TOC entry 3237 (class 2606 OID 16473)
-- Name: proposal_like FK_2a54070dc06f17b1f9346210b78; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like
    ADD CONSTRAINT "FK_2a54070dc06f17b1f9346210b78" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- TOC entry 3248 (class 2606 OID 16528)
-- Name: comment FK_5611945d9fb4f5a70618458e13c; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_5611945d9fb4f5a70618458e13c" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- TOC entry 3243 (class 2606 OID 16503)
-- Name: comment_like FK_58d29bc5664f0590042935209d3; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like
    ADD CONSTRAINT "FK_58d29bc5664f0590042935209d3" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- TOC entry 3242 (class 2606 OID 16498)
-- Name: proposal FK_7fb3ca379aa24d018fa2f73ec6b; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "FK_7fb3ca379aa24d018fa2f73ec6b" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- TOC entry 3240 (class 2606 OID 16488)
-- Name: proposal_dislike FK_830876c25662f440353c82c786c; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike
    ADD CONSTRAINT "FK_830876c25662f440353c82c786c" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- TOC entry 3239 (class 2606 OID 16483)
-- Name: proposal_dislike FK_83fd4d905b472b97de4b528b277; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike
    ADD CONSTRAINT "FK_83fd4d905b472b97de4b528b277" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- TOC entry 3244 (class 2606 OID 16508)
-- Name: comment_like FK_a253dba95eab8659c027bbace44; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like
    ADD CONSTRAINT "FK_a253dba95eab8659c027bbace44" FOREIGN KEY ("commentId") REFERENCES public.comment(id);


--
-- TOC entry 3246 (class 2606 OID 16518)
-- Name: comment_dislike FK_acea6660c770d6e0a55ce9f3965; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike
    ADD CONSTRAINT "FK_acea6660c770d6e0a55ce9f3965" FOREIGN KEY ("commentId") REFERENCES public.comment(id);


--
-- TOC entry 3245 (class 2606 OID 16513)
-- Name: comment_dislike FK_be5c0d90039fddc027876b7b359; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike
    ADD CONSTRAINT "FK_be5c0d90039fddc027876b7b359" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- TOC entry 3247 (class 2606 OID 16523)
-- Name: comment_file FK_cc8be13ff4e856f0baa0917c556; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_file
    ADD CONSTRAINT "FK_cc8be13ff4e856f0baa0917c556" FOREIGN KEY ("commentId") REFERENCES public.comment(id);


--
-- TOC entry 3238 (class 2606 OID 16478)
-- Name: proposal_like FK_e9afa0a740ac8e6c54201c60170; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like
    ADD CONSTRAINT "FK_e9afa0a740ac8e6c54201c60170" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


-- Completed on 2022-04-02 23:03:03

--
-- PostgreSQL database dump complete
--

