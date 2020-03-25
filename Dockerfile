FROM ruby:2.6.5
ENV BUNDLER_VERSION=2.1.2
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        nodejs
RUN gem install bundler -v 2.1.2
WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install
COPY . .
EXPOSE 4000
CMD ["jekyll", "serve", "--host", "0.0.0.0"]
