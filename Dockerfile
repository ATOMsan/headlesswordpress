FROM wordpress

RUN sed -i 's/80/8080/' /etc/apache2/ports.conf /etc/apache2/sites-enabled/000-default.conf

RUN mv "$PHP_INI_DIR"/php.ini-development "$PHP_INI_DIR"/php.ini

# install_wordpress.sh & misc. dependencies
RUN apt-get update; \
	apt-get install -yq mariadb-client netcat-openbsd sudo less git unzip

# wp-cli
RUN curl -sL https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o wp; \
	chmod +x wp; \
	mv wp /usr/local/bin/; \
	mkdir /var/www/.wp-cli; \
	chown www-data:www-data /var/www/.wp-cli

# composer
RUN curl -sL https://raw.githubusercontent.com/composer/getcomposer.org/master/web/installer | php; \
	mv composer.phar /usr/local/bin/composer; \
	mkdir /var/www/.composer; \
	chown www-data:www-data /var/www/.composer

RUN chown www-data:www-data /var/www/html

# phpunit, phpcs, wpcs
USER www-data
# RUN composer global require hirak/prestissimo
RUN composer global require \
    phpunit/phpunit:^9.0 \
    squizlabs/php_codesniffer:^3.0 \
    friendsofphp/php-cs-fixer:^3.0

USER root
# include composer-installed executables in $PATH
ENV PATH="/var/www/.composer/vendor/bin:${PATH}"

EXPOSE 8080
