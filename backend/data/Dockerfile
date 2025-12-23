FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy JSON files
COPY data /usr/share/nginx/html

# Expose port
EXPOSE 80
