FROM postgres:14.2
WORKDIR .
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
ENV POSTGRES_PASSWORD="666666"
ENV POSTGRES_USER="admin"
ENV POSTGRES_DB="proposaler"
EXPOSE 5432