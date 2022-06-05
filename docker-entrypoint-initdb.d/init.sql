--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

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
-- Name: comment_dislike; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment_dislike (
    id integer NOT NULL,
    "commentId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.comment_dislike OWNER TO admin;

--
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
-- Name: comment_dislike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_dislike_id_seq OWNED BY public.comment_dislike.id;


--
-- Name: comment_file; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment_file (
    id integer NOT NULL,
    filename character varying NOT NULL,
    "commentId" integer NOT NULL
);


ALTER TABLE public.comment_file OWNER TO admin;

--
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
-- Name: comment_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_file_id_seq OWNED BY public.comment_file.id;


--
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
-- Name: comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;


--
-- Name: comment_like; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.comment_like (
    id integer NOT NULL,
    "commentId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.comment_like OWNER TO admin;

--
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
-- Name: comment_like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.comment_like_id_seq OWNED BY public.comment_like.id;


--
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
-- Name: proposal_dislike; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal_dislike (
    id integer NOT NULL,
    "proposalId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.proposal_dislike OWNER TO admin;

--
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
-- Name: proposal_dislike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_dislike_id_seq OWNED BY public.proposal_dislike.id;


--
-- Name: proposal_file; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal_file (
    id integer NOT NULL,
    filename character varying NOT NULL,
    "proposalId" integer NOT NULL
);


ALTER TABLE public.proposal_file OWNER TO admin;

--
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
-- Name: proposal_file_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_file_id_seq OWNED BY public.proposal_file.id;


--
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
-- Name: proposal_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_id_seq OWNED BY public.proposal.id;


--
-- Name: proposal_like; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.proposal_like (
    id integer NOT NULL,
    "proposalId" integer NOT NULL,
    "authorId" integer NOT NULL
);


ALTER TABLE public.proposal_like OWNER TO admin;

--
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
-- Name: proposal_like_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.proposal_like_id_seq OWNED BY public.proposal_like.id;


--
-- Name: tags; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public.tags (
    id integer NOT NULL,
    "proposalId" integer NOT NULL,
    label character varying NOT NULL
);


ALTER TABLE public.tags OWNER TO admin;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tags_id_seq OWNER TO admin;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.tags_id_seq OWNED BY public.tags.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: admin
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    login character varying NOT NULL,
    password character varying NOT NULL,
    username character varying NOT NULL,
    avatar character varying,
    github_token character varying
);


ALTER TABLE public."user" OWNER TO admin;

--
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
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: comment id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);


--
-- Name: comment_dislike id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike ALTER COLUMN id SET DEFAULT nextval('public.comment_dislike_id_seq'::regclass);


--
-- Name: comment_file id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_file ALTER COLUMN id SET DEFAULT nextval('public.comment_file_id_seq'::regclass);


--
-- Name: comment_like id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like ALTER COLUMN id SET DEFAULT nextval('public.comment_like_id_seq'::regclass);


--
-- Name: proposal id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal ALTER COLUMN id SET DEFAULT nextval('public.proposal_id_seq'::regclass);


--
-- Name: proposal_dislike id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike ALTER COLUMN id SET DEFAULT nextval('public.proposal_dislike_id_seq'::regclass);


--
-- Name: proposal_file id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_file ALTER COLUMN id SET DEFAULT nextval('public.proposal_file_id_seq'::regclass);


--
-- Name: proposal_like id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like ALTER COLUMN id SET DEFAULT nextval('public.proposal_like_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.tags ALTER COLUMN id SET DEFAULT nextval('public.tags_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment (id, comment, "createDatetime", "authorId", "proposalId", "replyTo") FROM stdin;
1	Praesent ultricies tellus sit amet lorem varius blandit. Mauris posuere mi lorem, ut venenatis sapien suscipit a. Vestibulum volutpat justo tellus, vitae bibendum elit faucibus tincidunt. Donec a mauris massa. Curabitur fringilla ante vitae neque vehicula, id dictum mi sollicitudin	2022-05-28 11:16:12.147	1	1	\N
2	Donec gravida dapibus suscipit. Aliquam erat volutpat. Suspendisse volutpat, lorem nec porttitor congue, turpis urna convallis tellus, at vestibulum orci ex sed ex. Aenean tincidunt tincidunt purus, et consequat justo. Sed posuere odio quis gravida pretium.	2022-05-29 14:16:28	2	1	\N
\.


--
-- Data for Name: comment_dislike; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment_dislike (id, "commentId", "authorId") FROM stdin;
1	2	2
\.


--
-- Data for Name: comment_file; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment_file (id, filename, "commentId") FROM stdin;
\.


--
-- Data for Name: comment_like; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.comment_like (id, "commentId", "authorId") FROM stdin;
1	1	1
\.


--
-- Data for Name: proposal; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal (id, title, description, "createDatetime", "authorId") FROM stdin;
1	First Proposal	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia odio, sed accumsan justo dictum sed. Aenean ipsum turpis, porttitor et erat vel, euismod egestas turpis. Morbi pellentesque, justo ullamcorper accumsan porta, nisl elit gravida nisi, ac laoreet nisl justo eget ipsum. Proin vel eros lobortis, elementum sapien quis, pretium libero. 	2022-01-06 20:31:59.221214	1
2	Second Proposal	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia odio, sed accumsan justo dictum sed. Aenean ipsum turpis, porttitor et erat vel, euismod egestas turpis. Morbi pellentesque, justo ullamcorper accumsan porta, nisl elit gravida nisi, ac laoreet nisl justo eget ipsum. Proin vel eros lobortis, elementum sapien quis, pretium libero. 	2022-04-30 20:09:54.120992	2
\.


--
-- Data for Name: proposal_dislike; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal_dislike (id, "proposalId", "authorId") FROM stdin;
1	2	1
2	2	2
\.


--
-- Data for Name: proposal_file; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal_file (id, filename, "proposalId") FROM stdin;
\.


--
-- Data for Name: proposal_like; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.proposal_like (id, "proposalId", "authorId") FROM stdin;
1	1	1
2	1	2
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.tags (id, "proposalId", label) FROM stdin;
1	1	Frontend
2	2	Backend
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public."user" (id, login, password, username, avatar, github_token) FROM stdin;
1	admin	admin	admin	\N	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
2	test	test	test	\N	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
\.


--
-- Name: comment_dislike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_dislike_id_seq', 1, false);


--
-- Name: comment_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_file_id_seq', 10, true);


--
-- Name: comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_id_seq', 16, true);


--
-- Name: comment_like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.comment_like_id_seq', 1, false);


--
-- Name: proposal_dislike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_dislike_id_seq', 1, true);


--
-- Name: proposal_file_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_file_id_seq', 1, true);


--
-- Name: proposal_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_id_seq', 3, true);


--
-- Name: proposal_like_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.proposal_like_id_seq', 5, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.tags_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- Name: comment_like PK_04f93e6f1ace5dbc1d8c562ccbf; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like
    ADD CONSTRAINT "PK_04f93e6f1ace5dbc1d8c562ccbf" PRIMARY KEY (id);


--
-- Name: comment PK_0b0e4bbc8415ec426f87f3a88e2; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY (id);


--
-- Name: comment_file PK_82d253ec0eee2847f7aed08cbf4; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_file
    ADD CONSTRAINT "PK_82d253ec0eee2847f7aed08cbf4" PRIMARY KEY (id);


--
-- Name: proposal_file PK_b8074b9a65dffc14640182bccc7; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_file
    ADD CONSTRAINT "PK_b8074b9a65dffc14640182bccc7" PRIMARY KEY (id);


--
-- Name: comment_dislike PK_c15642e15be48360a141a18e3c3; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike
    ADD CONSTRAINT "PK_c15642e15be48360a141a18e3c3" PRIMARY KEY (id);


--
-- Name: proposal_like PK_c6a2fae6f3b2acca12f40f6fb67; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like
    ADD CONSTRAINT "PK_c6a2fae6f3b2acca12f40f6fb67" PRIMARY KEY (id);


--
-- Name: proposal PK_ca872ecfe4fef5720d2d39e4275; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY (id);


--
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- Name: proposal_dislike PK_e10cd66dc30022748e63bf942b5; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike
    ADD CONSTRAINT "PK_e10cd66dc30022748e63bf942b5" PRIMARY KEY (id);


--
-- Name: tags PK_e7dc17249a1148a1970748eda99; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY (id);


--
-- Name: user UQ_78a916df40e02a9deb1c4b75edb; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE (username);


--
-- Name: user UQ_a62473490b3e4578fd683235c5e; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE (login);


--
-- Name: proposal_file FK_1e9df891c89a21a9b91d948f00d; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_file
    ADD CONSTRAINT "FK_1e9df891c89a21a9b91d948f00d" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- Name: comment FK_276779da446413a0d79598d4fbd; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_276779da446413a0d79598d4fbd" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- Name: proposal_like FK_2a54070dc06f17b1f9346210b78; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like
    ADD CONSTRAINT "FK_2a54070dc06f17b1f9346210b78" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- Name: tags FK_51d3c81a911db5edb8fc627c56d; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.tags
    ADD CONSTRAINT "FK_51d3c81a911db5edb8fc627c56d" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- Name: comment FK_5611945d9fb4f5a70618458e13c; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT "FK_5611945d9fb4f5a70618458e13c" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- Name: comment_like FK_58d29bc5664f0590042935209d3; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like
    ADD CONSTRAINT "FK_58d29bc5664f0590042935209d3" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- Name: proposal FK_7fb3ca379aa24d018fa2f73ec6b; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "FK_7fb3ca379aa24d018fa2f73ec6b" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- Name: proposal_dislike FK_830876c25662f440353c82c786c; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike
    ADD CONSTRAINT "FK_830876c25662f440353c82c786c" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- Name: proposal_dislike FK_83fd4d905b472b97de4b528b277; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_dislike
    ADD CONSTRAINT "FK_83fd4d905b472b97de4b528b277" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- Name: comment_like FK_a253dba95eab8659c027bbace44; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_like
    ADD CONSTRAINT "FK_a253dba95eab8659c027bbace44" FOREIGN KEY ("commentId") REFERENCES public.comment(id);


--
-- Name: comment_dislike FK_acea6660c770d6e0a55ce9f3965; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike
    ADD CONSTRAINT "FK_acea6660c770d6e0a55ce9f3965" FOREIGN KEY ("commentId") REFERENCES public.comment(id);


--
-- Name: comment_dislike FK_be5c0d90039fddc027876b7b359; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_dislike
    ADD CONSTRAINT "FK_be5c0d90039fddc027876b7b359" FOREIGN KEY ("authorId") REFERENCES public."user"(id);


--
-- Name: comment_file FK_cc8be13ff4e856f0baa0917c556; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.comment_file
    ADD CONSTRAINT "FK_cc8be13ff4e856f0baa0917c556" FOREIGN KEY ("commentId") REFERENCES public.comment(id);


--
-- Name: proposal_like FK_e9afa0a740ac8e6c54201c60170; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.proposal_like
    ADD CONSTRAINT "FK_e9afa0a740ac8e6c54201c60170" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id);


--
-- PostgreSQL database dump complete
--

