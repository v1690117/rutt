FROM maven:3.6.3-jdk-11-openj9 AS MAVEN_BUILD

COPY pom.xml /build/
COPY package.json /build/
COPY tsconfig.json /build/
COPY webpack.config.js /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn package

FROM adoptopenjdk:11-jre-openj9

WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/*.jar /app/

EXPOSE 8080
CMD ["java", "-jar", "rutt-0.0.1-SNAPSHOT.jar"]
