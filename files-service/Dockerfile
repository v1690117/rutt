FROM maven:3.8.3-openjdk-17 AS MAVEN_BUILD

COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/
RUN mvn -Dmaven.test.skip=true -Dmaven.validate.skip=true package

FROM openjdk:17

WORKDIR /app
COPY --from=MAVEN_BUILD /build/target/*.jar /app/

EXPOSE 8081
CMD ["java", "-jar", "app.jar"]
