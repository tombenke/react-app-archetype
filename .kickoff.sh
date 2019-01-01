export files="package.json package-lock.json"
for f in $files; do
    sed -f .kickoff.sed -i $f
done
