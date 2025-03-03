import React from 'react';
import Link, {LinkProps} from 'next/link';

import {ChevronLeft} from '@mui/icons-material';
import {Breadcrumbs, Stack, Typography} from '@mui/material';

export interface BreadcrumbItem {
	href?: LinkProps['href'];
	children: string;
}

interface Props {
	isLoading?: boolean;
	items: BreadcrumbItem[];
}

function PageBreadcrumbs(props: Props) {
	const {items} = props;
	return (
		<Breadcrumbs maxItems={4} aria-label='breadcrumb'>
			{items.map((item, index) => {
				const {href, children} = item;
				if (href) {
					return (
						<Stack direction='row' key={index}>
							<ChevronLeft />
							<Typography
								component={Link}
								sx={{
									textDecoration: 'none',
									':hover': {
										textDecoration: 'underline',
									},
								}}
								color='inherit'
								href={href}
							>
								{children}
							</Typography>
						</Stack>
					);
				}
				return (
					<Typography key={index} color='primary.dark'>
						{/* replace color  */}
						{children}
					</Typography>
				);
			})}
		</Breadcrumbs>
	);
}

export default PageBreadcrumbs;
